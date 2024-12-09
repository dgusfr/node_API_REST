const { findUserByUsername, createUser } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function login(req, res) {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
}
async function register(req, res) {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await createUser(username, hash);
  res.json({ message: "User created" });
}
module.exports = { login, register };
