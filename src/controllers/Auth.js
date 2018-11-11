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
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const existingUser = await user.where({ email });
      if (existingUser.length === 0) {
        res.status(404).json({
          error: "User does not exist"
        });
      } else {
        const { id, hashedPassword } = existingUser[0];

        const passwordMatches = Password.compare(password, hashedPassword);
        if (passwordMatches) {
          delete existingUser[0].hashedPassword;
          res.status(200).json({
            user: existingUser[0],
            token: await JWT.createToken({ id, email })
          });
        } else {
          res.status(401).json({
            error: "Invalid Credentials"
          });
        }
      }
    } catch (err) {}
  }
}

export default Auth;
