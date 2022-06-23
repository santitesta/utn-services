const { Order, User, Device } = require("../db")

async function createOrder(req, res) {
  const { id_inei, email, motive, commentary } = req.body
  const user = await User.findOne({ where: { email } })
  const device = await Device.findOne({ where: { id_inei } })
  try {
    const order = await Order.create({
      motive,
      commentary: [commentary]
    })
    if (order) {
      await order.setUser(user)
      await order.setDevice(device)
      res.status(201).json(order)
    }
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getOrders(req, res) {
  try {
    const orders = await Order.findAll({
      order: [
        ['id_ot', 'ASC'],
      ]
    })
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getOrdersByUser(req, res) {
  const { email } = req.params
  try {
    const orders = await Order.findAll({
      where: { userEmail: email },
      order: [
        ['id_ot', 'ASC'],
      ]
    })
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function addCommentary(req, res) {
  const { id_ot, commentary } = req.body
  try {
    const order = await Order.findOne({
      where: { id_ot }
    })
    await order.update({ commentary: [...order.commentary, commentary] })
    if (order) res.send(order)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function changeState(req, res) {
  const { id_ot, state } = req.body
  try {
    const order = await Order.findOne({
      where: { id_ot }
    })
    await order.update({ state: state })
    if (order) res.send(order)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createOrder,
  getOrders,
  getOrdersByUser,
  addCommentary,
  changeState
}