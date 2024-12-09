const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const articleController = require("../controllers/articleController");
router.post("/", auth, articleController.create);
router.put("/:id", auth, articleController.update);
router.get("/", auth, articleController.list);
module.exports = router;
