async function getEquipos(req,res){
  try {
  console.log('Bravo')
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getEquipos
}