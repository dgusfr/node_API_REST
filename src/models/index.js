const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");
const sequelize = new Sequelize(dbConfig);
const User = require("./User")(sequelize);
const Article = require("./Article")(sequelize);
User.hasMany(Article, { foreignKey: "userId" });
Article.belongsTo(User, { foreignKey: "userId" });
sequelize.sync();
module.exports = { sequelize, User, Article };
