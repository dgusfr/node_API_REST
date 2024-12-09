const db = require("../db/connection");
async function findUserByUsername(username) {
  const [rows] = await db.query(
    "SELECT id, username, password FROM users WHERE username = ?",
    [username]
  );
  return rows[0] || null;
}
async function createUser(username, hash) {
  await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    hash,
  ]);
}
module.exports = { findUserByUsername, createUser };
