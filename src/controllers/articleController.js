const {
  createArticle,
  updateArticle,
  listArticles,
} = require("../models/articleModel");
async function create(req, res) {
  const { title, content } = req.body;
  await createArticle(title, content);
  res.json({ message: "Article created" });
}
async function update(req, res) {
  const { title, content } = req.body;
  const { id } = req.params;
  await updateArticle(id, title, content);
  res.json({ message: "Article updated" });
}
async function list(req, res) {
  const articles = await listArticles();
  res.json({ articles });
}
module.exports = { create, update, list };
