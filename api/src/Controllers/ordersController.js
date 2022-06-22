const { Orders } = require("../db")

async function createOrder(req, res) {
  const { id_inei, motive, commentary } = req.body
  try {
    const order = await Orders.create({
      id_inei,
      motive,
      commentary
    })
    if (order) res.status(201).json(order)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getOrders(req, res) {
  try {
    const orders = await Orders.findAll()
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createOrder,
  getOrders
}