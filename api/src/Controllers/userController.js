const { Users } = require('../db');

async function getUsers(req, res) {
  const users = await Users.findAll({
    order: [
      ['email', 'ASC'],
    ]
  });
  users.length ? res.json(users) : res.send("Users not found");
}

async function signUp(req, res) {
  const { email, password, institute } = req.body;
  try {
    const [user, created] = await Users.findOrCreate({
      where: { email },
      defaults: { email, password, institute }
    })
    if (created) res.json(user)
    else res.send('Email already in use')
  } catch (error) {
    res.status(500).send(error)
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({
      where: { email: email }
    })
    console.log('User found: ', user)
    if (!user) {
      res.status(204).send()
    } else if (user.password === password) {
      res.status(200).json(user)
    } else {
      res.status(200).send({ wrongPass: 'Wrong password' });
    }
  } catch (error) {
    res.status(404).send(error)
  }
}

async function changePermission(req, res) {
  const { email, institute } = req.body;
  try {
    const rowsUpdated = await Users.update({
      institute: institute
    },
      {
        where: { email: email }
      })
    if (!rowsUpdated.length) { res.status(200).send() }
    else { res.status(304).send() }
  } catch (error) {
    res.status(404).send(error)
  }
}

async function changeVerification(req, res) {
  const { email, verified } = req.body;
  console.log('en vivo y en directo: ',email, verified)
  try {
    const rowsUpdated = await Users.update({
      verified: verified
    },
      {
        where: { email: email }
      })
    if (!rowsUpdated.length) { res.status(200).send() }
    else { res.status(304).send() }
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = {
  getUsers,
  signUp,
  login,
  changePermission,
  changeVerification
}