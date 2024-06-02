import { generateToken } from "../helpers/create_token.js"
import { comparePassword, encryptPassword } from "../helpers/encyipt_password.js"
import { AuthModel } from "../models/auth.js"
const Auth = new AuthModel()
export const login = async (req, res) => {
    try {
        const user = await Auth.login(req.body)
        if (!user) {
            return res.status(401).json({
                status: false, message: `password or email invalid`, user: null
            })
        }
        
        const validatePass = await comparePassword(req.body.password, user.password)
        if (!validatePass) {
            return res.status(401).json({
                status: false, message: `password or email invalid`, user: null
            })
        }
        const {id} = user;
        const { password, ...newUser } = user;
        const token = await generateToken(id)
   
        
        return res.status(200).json({
            status: true, message: `Ok`, newUser, token
        })
    } catch (error) {
        return res.status(500).json({
            status: false, message: `Error ${error}`, user: null
        })

    }


}


export const register = async (req, res) => {
    req.body.password = await encryptPassword(req.body.password)
    try {
        const user = await Auth.create(req.body)
        const { password, ...newUser } = user;
        return res.status(200).json({
            status: true, message: `User created`, user: newUser.insertId
        })
    } catch (error) {
        return res.status(500).json({
            status: false, message: `Error ${error}`, user: null
        })
    }
}

export const readJWT = async (req, res) => {
    return res.json({
      status: true,
    message: "Logged in successfully",
      user: req.userAuth,
    });
  };