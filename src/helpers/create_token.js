import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthModel } from "../models/auth.js";
dotenv.config();

const Auth = new AuthModel();


export const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        reject("error generate token");
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyToken = async (token = "") => {
  try {
    if (token.length < 10) {
      return null;
    }
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await Auth.findById(id);
    if (user) {
      return user;
    }
  } catch (error) {
    return new Error(error);
  }
};
