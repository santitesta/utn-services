const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diets', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true //TRY THISS!!!
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {timestamps: false}
  );
};