const { utnModel } = require("../db")

async function getEquipos(req,res){
  try {
    allDevices = await utnModel.findAll({
      limit: 100
    })
  res.send(allDevices)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getEquipos
}