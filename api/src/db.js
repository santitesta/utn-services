const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const {
  DB_NAME, DB_USER, DB_PASS, DB_HOST
} = process.env;

console.log('env variables: ',DB_NAME,DB_USER,DB_PASS)
const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
  host: DB_HOST,
  dialect: 'postgresql',
  logging: false
})

// const utnModel = sequelize.define('equipos', {
//   "id": {type: Sequelize.INTEGER, primaryKey: true},
//   "equipo": Sequelize.INTEGER
//   },
//   {timestamps: false}
// )

const utnModel = sequelize.define('devices', {
  "id_inei": {type: DataTypes.INTEGER, primaryKey: true},
  "instituto": DataTypes.INTEGER,
  "departamento": DataTypes.STRING,
  "servicio": DataTypes.STRING,
  "equipo": DataTypes.STRING,
  "e_tecnico": DataTypes.STRING,
  "marca": DataTypes.STRING,
  "modelo": DataTypes.STRING
  },
  {timestamps: false}
);

sequelize.authenticate()
  .then(() => console.log('Conexion exitosa'))
  .catch(error => console.log('Error rey',error))

module.exports = {
  utnModel, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};