const express = require("express");
const { create, update, list } = require("../controllers/articleController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();
router.get("/", list);
router.post("/", auth, create);
router.put("/:id", auth, update);
module.exports = router;
