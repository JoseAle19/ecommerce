import { connection } from "../config/db.js"

export class AuthModel {
    constructor() {
        this.con = connection
    }
    login = ({ email, password }) => {
        const query = `SELECT * FROM users WHERE email LIKE ? and password LIKE ?`;
        return new Promise((resolve, reject) => {
                this.con.query(query,[email, password], (err,result)=>{
                    if (err) reject(err);
                    resolve(result[0])
                })
        })
    }
    findByEmail = ({ email }) => {

        const query = `SELECT * FROM users WHERE email LIKE ?`;
        return new Promise((resolve, reject) => {
            this.con.query(query, [email], (err, result) => {
                if (err) reject(err);
                resolve(result[0])
            })
        })

    }


    findById = (id) => {
        const query = `SELECT * FROM users WHERE id LIKE ?`;
        new Promise((resolve, reject) => {
            this.con.query(query, [id], (err, result) => {
                if (err) reject(err);

                resolve(result[0])
            })
        })
    }

}