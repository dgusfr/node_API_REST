const { Article } = require("../models");
module.exports = {
  async create(req, res) {
    const { title, content } = req.body;
    const userId = req.userId;
    if (!title || !content) {
      return res.status(400).json({ error: "Parâmetros inválidos" });
    }
    const article = await Article.create({ title, content, userId });
    return res
      .status(201)
      .json({ message: "Artigo criado", articleId: article.id });
  },
  async update(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    const article = await Article.findOne({
      where: { id, userId: req.userId },
    });
    if (!article) {
      return res
        .status(404)
        .json({ error: "Artigo não encontrado ou não pertence ao usuário" });
    }
    if (title) article.title = title;
    if (content) article.content = content;
    await article.save();
    return res.status(200).json({ message: "Artigo atualizado" });
  },
  async list(req, res) {
    const articles = await Article.findAll({ where: { userId: req.userId } });
    return res.status(200).json(articles);
  },
};
