const jwt = require("jsonwebtoken");
const { AuthorizationError } = require("../errors/CustomError");
require("dotenv").config();

class JwtToken {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }

  generateToken() {
    const token = jwt.sign(JSON.stringify(this), process.env.SECRETKEY);
    return token;
  }
  static verifyToken(req, res, next) {
    // console.log(req.cookies);
    const token = req.cookies["authorization"];
    if (!token) throw new AuthorizationError("Unauthorized!");
    const payload = jwt.verify(token, process.env.SECRETKEY);
    console.log(payload);
    next();
  }
}

module.exports = JwtToken;
