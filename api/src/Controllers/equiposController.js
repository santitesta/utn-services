const { Device } = require("../db")

async function getEquipos(req, res) {
  try {
    allDevices = await Device.findAll({
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
  const { id, institute } = req.body;
  try {
    let device = await Device.findOne({
      where: {
        id_inei: id
      }
    })
    if (!device) res.status(204).send()
    else if (institute !== 'Admin' && institute !== device?.instituto) res.status(200).send({ denied: 'You do not have permissions to see this device' })
    else res.json(device)
  } catch (error) {
    res.status(500).send(error)
  }
}

async function getDeviceByInstitute(req, res) {
  const { ins } = req.params;

  try {
    let device = await Device.findAll({
      where: {
        instituto: ins
      },
      limit: 100,
      order: [
        ["id_inei", "ASC"],
      ]
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