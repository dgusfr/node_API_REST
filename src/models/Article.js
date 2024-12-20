const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  return sequelize.define("Article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
