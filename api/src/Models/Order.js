const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('order', {
    id_ot: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // id_inei: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
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