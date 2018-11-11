import jwt from "jsonwebtoken";
import { jwtSecret, jwtExpiry } from "../config";

class JWT {
  static async createToken({ id, email }) {
    return jwt.sign({ id, email }, jwtSecret, { expiresIn: jwtExpiry });
  }

  static async verifyToken(token) {
    return jwt.verify(token, jwtSecret);
  }
}

export default JWT;
