'use strict';
module.exports = (sequelize, DataTypes) => {
  var bob = sequelize.define('bob', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    // timestamps: true
  });
  bob.associate = function(models) {
    // associations can be defined here
  };
  return bob;
};