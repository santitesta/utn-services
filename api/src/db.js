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

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  email: {    //2
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {       //3
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {timestamps: false});

sequelize.authenticate()
  .then(() => console.log('Conexion exitosa'))
  .catch(error => console.log('Error rey',error))

module.exports = {
  utnModel,
  Users,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};