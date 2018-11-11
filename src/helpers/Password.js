import bcrypt from "bcryptjs";

class Password {
  static async hash(password) {
    return bcrypt.hash(password, 10);
  }

  static async compare(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default Password;
