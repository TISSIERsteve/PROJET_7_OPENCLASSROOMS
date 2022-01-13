// Connection à MySql
const database = async () => {
    try {
        await mysql.createConnection({
            user: "root",
            host: "localhost",
            password: "",
            database: "utilisateurs",
        });
        console.log("Connecter à MySql");

    } catch (error) {
        console.log("Erreur de connection à MySql", error);
    }
}

module.exports = database