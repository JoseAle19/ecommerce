import { AuthModel } from "../models/auth.js";
const authModel = new AuthModel();



export const existEmail = async (req, res, next) => {
    const user = await authModel.findByEmail(req.body);
    if (user) {
        return res.status(400).json({status:false, message: "The email already exists", user:null});
    }
    else{
        next();
    }
}