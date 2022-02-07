const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

app.use(express.urlencoded({ extended: true })) //Middleware permet de passer des requêtes au niveau du body

app.use(cors())
app.use(express.json())

// ======================================== Déclaration de mes fonctions ===========================================
const authRoutes = require("./routes/AuthUsersRoutes")
const messagesRoutes = require("./routes/MessagesUserRoutes")
const commentsRoutes = require("./routes/CommentsUsersRoutes")
const postsRoutes = require("./routes/PostsUsersRoutes")

// ==================================== Enregistrer mes routes avec chemins =====================================
app.use("/api/auth", authRoutes) // Route création et connexion utilisateurs
app.use("/api/messagesPerso", messagesRoutes)  // Route publication message perso
app.use("/api/comments", commentsRoutes) // Route publication commentaires utilisateurs
app.use("/api/posts", postsRoutes) // Route post images utilisateurs

// Middleware qui permet de charger les fichiers qui sont dans le répertoire images
app.use("/images", express.static(path.join(__dirname, "images")))

module.exports = app