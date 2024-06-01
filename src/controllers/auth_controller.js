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


        return res.status(200).json({
            status: true, message: `Ok`, user
        })
    } catch (error) {
        return res.status(500).json({
            status: false, message: `Error ${error}`, user: null
        })

    }


}