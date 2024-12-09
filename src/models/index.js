const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

const User = require("./User")(sequelize); // Certifique-se de que está carregando a model User corretamente.
const Article = require("./Article")(sequelize);

// Relacionamentos
User.hasMany(Article, { foreignKey: "userId" });
Article.belongsTo(User, { foreignKey: "userId" });

sequelize
  .sync({ force: true }) // Use "force: true" para recriar as tabelas.
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
  });

module.exports = { sequelize, User, Article };
