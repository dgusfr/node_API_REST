const db = require("../db/connection");
async function createArticle(title, content) {
  await db.query("INSERT INTO articles (title, content) VALUES (?, ?)", [
    title,
    content,
  ]);
}
async function updateArticle(id, title, content) {
  await db.query("UPDATE articles SET title = ?, content = ? WHERE id = ?", [
    title,
    content,
    id,
  ]);
}
async function listArticles() {
  const [rows] = await db.query("SELECT id, title, content FROM articles");
  return rows;
}
module.exports = { createArticle, updateArticle, listArticles };
