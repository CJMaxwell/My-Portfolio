import uuid from "uuid/v4";
import { user } from "../models";
import { Password, JWT } from "../helpers";

class Auth {
  static async signUp(req, res) {
    const { firstName, lastName, email, password } = req.body;

    try {
      const id = uuid();

      await user.insert({
        id,
        firstName,
        lastName,
        email,
        hashedPassword: await Password.hash(password)
      });

      res.status(201).json({
        user: {
          firstName,
          lastName,
          email
        },
        token: await JWT.createToken({ id, email })
      });
    } catch (error) {
      if (error.constraint === "user_email_unique") {
        res.status(409).json({
          error: `${email} already exists`
        });
      }
      // console.log(error.constraint);
      // console.log(error);
    }
  }

  static async login(req, res) {
    res.json({
      message: "Welcome"
    });
  }
}

export default Auth;
