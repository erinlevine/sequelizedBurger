module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date: {
      type: DataTypes.DATE
    }
  });
  return Burger;
};