import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthModel } from "../models/auth.js";
dotenv.config();

const UserModel = new User();
export const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(payload, process.env.SECRET_KEY, (errr, token) => {
      if (errr) {
        reject("No se pudo generar el token");
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
    const user = await UserModel.findById(id);
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
