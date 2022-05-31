const { utnModel } = require("../db")

async function getEquipos(req,res){
  try {
    allDevices = await utnModel.findAll({
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

async function getDeviceById(req,res){
  console.log('entra aca?')
  const {id} = req.params;
  console.log('sigue aca?', id)

  try {
    let device = await utnModel.findAll({
      where: {
        id_inei: id
      }
    })
    console.log(device)
    res.json(device)

  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getEquipos,
  getDeviceById
}