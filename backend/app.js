const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.urlencoded({ extended: true })) //Middleware permet de passer des requêtes au niveau du body

app.use((cors()))
app.use(express.json())

// ======================================== Déclaration de mes routes ===========================================
const authRoutes = require("./routes/AuthUsers")
// const commentsRoutes = require("./routes/CommentsUser")
// const postsRoutes = require("./routes/PostsUser")
// const messagesRoutes = require("./routes/MessagesUser")

// ==================================== Enregistrer mes routes avec chemins =====================================
app.use("/api/auth", authRoutes) // Route création et connexion utilisateurs
// app.use("/api/comments", commentsRoutes) // Route publication commentaires utilisateurs
// app.use("api/posts", postsRoutes) // Routes post images utilisateurs
// app.use("api/messagesPerso",messagesRoutes)  // Routes post message perso


module.exports = app