const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('utn','postgres','153624San.',{
  host: 'localhost',
  dialect: 'postgresql',
  logging: false
})

const Models = []

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

// const utnModel = sequelize.define('Devices', {
//   "id_inei": {type: Sequelize.INTEGER, primaryKey: true},
//   "Instituto": Sequelize.INTEGER,
//   "Departamento": Sequelize.VARCHAR,
//   "Servicio": Sequelize.VARCHAR,
//   "equipo": Sequelize.VARCHAR,
//   "e_tecnico": Sequelize.VARCHAR,
//   "marca": Sequelize.VARCHAR,
//   "modelo": Sequelize.VARCHAR
//   },
//   {timestamps: false}
// );