async function getEquipos(req,res){
  try {
  console.log('Bravo')
  res.send({id: 401, equipo: 101})
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getEquipos
}