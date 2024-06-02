import bcrypt from "bcrypt";


export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    console.log(pass)
    return pass;
}


export const comparePassword = async (password, passwordDB) => {
    return await bcrypt.compare(password, passwordDB);
}