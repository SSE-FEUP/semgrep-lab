const db = require("better-sqlite3")("test.db");

function getProduct(id) {
  const query = "SELECT * FROM products WHERE id = " + id;  // (3) SQL injection
  return db.prepare(query).get();
}

module.exports = { getProduct };
