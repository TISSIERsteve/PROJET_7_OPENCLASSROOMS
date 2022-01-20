// Connection à MySql
const mysql = require("mysql")

// Fonction pour se connecter à Mysql
const database = async () => {
    try {
        await mysql.createConnection({
            user: "root",
            host: "localhost",
            password: "password",
            database: "user",
        });
        console.log("Connecter à MySql");

    } catch (error) {
        console.log("Erreur de connection à MySql", error);
    }
}

module.exports = database