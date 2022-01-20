// Connection à MySql
const mysql = require("mysql")

// Fonction pour se connecter à Mysql
const database = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "groupomania",
});
console.log("Connecter à MySql");

database.connect()

module.exports = database