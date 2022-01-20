const express = require("express")
const app = express()
const cors = require("cors")


app.use((cors()))
app.use(express.json())


// Déclaration de mes routes
const userRoutes = require("./routes/user")


// Enregistrer mes routes avec chemins
app.use("/", userRoutes) // Route création ou authentification user


module.exports = app