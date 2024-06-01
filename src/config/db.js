import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "electronic_ecommerce",
  password: "",
  port: 3306,
});


connection.connect((err) => {
  if (err) {
    console.log(`Error al conectar la base de datos ${err}`);
    return;
  }
  console.log("Base de datos conectada");
  return;
});
