const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('device', {
    "id_inei": { type: DataTypes.INTEGER, primaryKey: true },
    "instituto": DataTypes.STRING,
    "departamento": DataTypes.STRING,
    "servicio": DataTypes.STRING,
    "equipo": DataTypes.STRING,
    "e_tecnico": DataTypes.STRING,
    "marca": DataTypes.STRING,
    "modelo": DataTypes.STRING
  },
    { timestamps: false }
  );
}