const { User } = require('../db');

async function getUsers(req, res) {
  const users = await User.findAll({
    order: [
      ['email', 'ASC'],
    ]
  });
  users.length ? res.json(users) : res.status(204).send();
}

async function signUp(req, res) {
  console.log('req body: ',req.body)
  const { email, password, instituto, departamento, servicio } = req.body;
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { email, password, institute: instituto, department: departamento, service: servicio }
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
    const user = await User.findOne({
      where: { email: email }
    })
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

async function changeVerification(req, res) {
  const { email, verified } = req.body;
  try {
    const rowsUpdated = await User.update({
      verified: verified
    },
      {
        where: { email: email }
      })
    res.status(200).send()
  } catch (error) {
    res.status(404).send(error)
  }
}

async function deleteUser(req, res) {
  const { email } = req.params;
  try {
    const user = await User.findOne({ where: { email } })
    await user.destroy()
    res.send({ success: `Usuario ${email} borrado` })
  } catch (error) {
    res.status(500).send()
  }
}

module.exports = {
  getUsers,
  signUp,
  login,
  changeVerification,
  deleteUser
}