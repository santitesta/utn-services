const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('utn','postgres','153624San.',{
  host: 'localhost',
  dialect: 'postgresql',
  logging: false
})

const utnModel = sequelize.define('equipos', {
  "id": {type: Sequelize.INTEGER, primaryKey: true},
  "equipo": Sequelize.INTEGER
  },
  {timestamps: false}
)

sequelize.authenticate()
  .then(() => console.log('Conexion exitosa'))
  .catch(error => console.log('Error rey',error))

module.exports = {
  utnModel, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};