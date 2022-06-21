const { Devices } = require("../db")

async function getEquipos(req, res) {
  try {
    allDevices = await Devices.findAll({
      limit: 100,
      order: [
        ["id_inei", "ASC"],
      ]
    })
    res.json(allDevices)
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getDeviceById(req, res) {
  const { id } = req.params;

  try {
    let device = await Devices.findOne({
      where: {
        id_inei: id
      }
    })
    if (device) res.json(device)
    else res.status(204).send()

  } catch (error) {
    res.status(500).send(error)
  }
}

async function getDeviceByInstitute(req, res) {
  const { ins } = req.params;

  try {
    let device = await Devices.findAll({
      where: {
        instituto: ins
      },
      limit: 100
    })
    if (device.length) res.json(device)
    else res.status(204).send()

  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getEquipos,
  getDeviceById,
  getDeviceByInstitute
}