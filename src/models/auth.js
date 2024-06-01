import { connection } from "../config/db.js"

export class AuthModel {
    constructor() {
        this.con = connection
    }

    findByEmail = ({ email }) => {

        const query = `SELECT * FROM user WHERE email LIKE ?`;
        new Promise((resolve, reject) => {
            this.con.query(query, [email], (err, result) => {
                if (err) reject(err);
                resolve(result[0])
            })
        })

    }


    findById = (id) => {
        const query = `SELECT * FROM user WHERE id LIKE ?`;
        new Promise((resolve, reject) => {
            this.con.query(query, [id], (err, result) => {
                if (err) reject(err);

                resolve(result[0])
            })
        })
    }

}