const { Order, User, Device } = require("../db")

async function createOrder(req, res) {
  const { id_inei, email, motive, commentary } = req.body
  const user = await User.findOne({ where: { email } })
  const device = await Device.findOne({ where: { id_inei } })

  try {
    if (user.institute === 'Admin'
      || (user.service === device.servicio || !user.service)
      && (user.department === device.departamento || !user.department)
      && user.institute === device.instituto) {

      const order = await Order.create({
        motive,
        commentary: [commentary]
      })

      if (order) {
        await order.setUser(user)
        await order.setDevice(device)
        res.status(201).json(order)

      } else res.status(400).send()

    } else res.status(200).send({ denied: `No tiene permisos sobre el equipo ${id_inei}` })
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getOrders(req, res) {
  try {
    const orders = await Order.findAll({
      order: [
        ['id_ot', 'ASC'],
      ],
      include: Device
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
      ],
      include: Device
    })
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getOrdersByPermission(req, res) {
  const { instituto, departamento, servicio } = req.params
  let whereStatement = { instituto }
  if (departamento !== 'null') {
    whereStatement.departamento = departamento
  }
  if (servicio !== 'null') {
    whereStatement.servicio = servicio
  }
  try {
    const orders = await Order.findAll({
      order: [
        ['id_ot', 'ASC'],
      ],
      include: [{
        model: Device,
        where: whereStatement
      }]
    })
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getOrdersByInstitute(req, res) {
  const { ins } = req.params
  console.log('ins: ', ins)
  try {
    const orders = await Order.findAll({
      order: [
        ['id_ot', 'ASC'],
      ],
      include: [{
        model: Device,
        where: {
          instituto: ins
        }
      }]
    })
    if (orders) res.send(orders)
    else res.status(400).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

async function addCommentary(req, res) {
  const { id_ot, email, commentary } = req.body
  const user = await User.findOne({ where: { email } })

  try {
    const order = await Order.findOne({
      where: { id_ot },
      include: Device
    })
    if (order) {

      if (user.institute === 'Admin'
        || (user.service === order.device.servicio || !user.service)
        && (user.department === order.device.departamento || !user.department)
        && user.institute === order.device.instituto) {

        await order.update({ commentary: [...order.commentary, commentary] })
        res.send(order)

      } else res.status(200).send({ denied: `No tiene permisos sobre la orden ${id_ot}` })

    } else res.status(400).send()

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

async function changeRefrigeration(req, res) {
  const { id_ot, refrigeration } = req.body
  try {
    const order = await Order.findOne({
      where: { id_ot }
    })
    await order.update({ refrigeration })
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
  getOrdersByPermission,
  getOrdersByInstitute,
  addCommentary,
  changeState,
  changeRefrigeration
}