const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.urlencoded({ extended: true })) //Middleware permet de passer des requêtes au niveau du body

app.use((cors()))
app.use(express.json())

// ======================================== Déclaration de mes routes ===========================================
const authRoutes = require("./routes/AuthUser")

// ==================================== Enregistrer mes routes avec chemins =====================================
app.use("/api/auth", authRoutes) // Route création et connexion utilisateur


module.exports = app