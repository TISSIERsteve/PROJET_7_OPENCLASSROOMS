const express = require("express")
const app = express()
app.use(express.json()) //Import de app pour pouvoir faire tourner l'application sur le server

// Connection à la base de données
const connectionMysql = require("./config/mysql")
connectionMysql()

// Variables d'environnement ou le port défini
const PORT = process.env.PORT || 3001

// Le serveur écoute sur le port définis
app.listen(PORT, () => console.log(`Serveur en route sur port `))