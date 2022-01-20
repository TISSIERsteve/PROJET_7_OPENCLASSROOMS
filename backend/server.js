const express = require("express")
const app = require("./app")


// Variables d'environnement ou le port défini
const PORT = process.env.PORT || 3001


// Le serveur écoute sur le port définis
app.listen(PORT, () => console.log(`Serveur en route sur le port : ${PORT} `))