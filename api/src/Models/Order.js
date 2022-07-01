const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('order', {
    id_ot: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    refrigeration: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  }, { timestamps: false });
}