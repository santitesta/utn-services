const { Order, User, Device } = require("../db")

async function createOrder(req, res) {
  const { id_inei, email, motive, commentary } = req.body
  const user = await User.findOne({ where: { email } })
  const device = await Device.findOne({ where: { id_inei } })
  try {
    const order = await Order.create({
      motive,
      commentary
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
    const orders = await Order.findAll()
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
      where: { userEmail: email }
    })
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createOrder,
  getOrders,
  getOrdersByUser
}