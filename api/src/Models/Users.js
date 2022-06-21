const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    email: {    //2
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {       //3
      type: DataTypes.STRING,
      allowNull: false,
    },
    institute: {
      type: DataTypes.STRING
    }
  }, {timestamps: false});
}