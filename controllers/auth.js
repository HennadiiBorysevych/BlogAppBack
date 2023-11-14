const db = require("../db");
const bcrypt = require("bcrypt");

const register = (req, res, next) => {
  const { email, username, password } = req.body;

  const q = "SELECT * FROM user WHERE email = ? OR username = ?";

  db.query(q, [email, username], (err, data) => {
    if (err) {
      return res.json(err);
    }

    if (data.length) {
      res.status(409).json("User already exists!");
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const queryUser =
      "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";

    db.query(queryUser, [username, email, password], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(201).json("User has been created.");
    });
  });
};

const login = (req, res, next) => {};
const logout = (req, res, next) => {};

module.exports = {
  register,
  login,
  logout
};
