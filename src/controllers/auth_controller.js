import { AuthModel } from "../models/auth.js"
const Auth = new AuthModel()

export const login =async (req, res)=>{
    try {
        const user = await Auth.findByEmail(req.body)
        return res.status(200).json({
            status: true, message:`user ${user}`, user:null
        })
    } catch (error) {
        return res.status(500).json({
            status: false, message:`Error ${error}`, user:null
        })
        
    }

    
}