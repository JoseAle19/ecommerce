import express from "express";
import { connection } from "../config/db.js";
import auth_routes from "../routes/auth.routes.js";

export class ServerModel {

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        //rutas de la api
        this.routes();
    }




    routes = () => {
      this.app.use("/api/auth", auth_routes);
    }


    database = async () => {
        await connection;
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`http://localhost:4000/`)
            console.log(`Server running on port ${port}`);
        });
    }
}

