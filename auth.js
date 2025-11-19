const jwt = require("jsonwebtoken");

function login(req, res) {
  const user = req.body.user;
  const token = jwt.sign({ user }, "123456");  // (2) hardcoded secret
  res.json({ token });
}

module.exports = { login };
