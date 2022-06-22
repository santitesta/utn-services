const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('orders', {
    id_ot : {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_inei: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'Pendiente',
    },
    motive: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentary: {
      type: DataTypes.STRING
    },
  }, { timestamps: false });
}