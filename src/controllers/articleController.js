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
  async delete(req, res) {
    try {
      const { id } = req.params;
      const userId = req.userId;

      const article = await Article.findOne({ where: { id, userId } });
      if (!article) {
        return res
          .status(404)
          .json({ error: "Artigo não encontrado ou não pertence ao usuário" });
      }

      await article.destroy();
      return res.status(200).json({ message: "Artigo deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar artigo:", error);
      return res.status(500).json({ error: "Erro ao deletar artigo" });
    }
  },
};
