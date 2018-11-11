import { Router } from "express";
import { Auth } from "../controllers";
import { Auth as AuthMiddleware } from "../middleware";

const auth = Router();

auth.post("/users/signup", AuthMiddleware.signUp, Auth.signUp);
auth.post("/users/login", Auth.login);

export default auth;
