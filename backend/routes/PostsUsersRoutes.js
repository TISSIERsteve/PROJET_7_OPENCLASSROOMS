const express = require("express")
const router = express.Router()
const multer = require("../middleware/multer-config")
const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const postsCtrl = require("../controllers/PostsUsersControllers")

router.get("/", token, postsCtrl.getAllPosts) // Obtenir tous les images des utilisateurs
router.get("/:id", postsCtrl.getOnePost) // Obtenir mes images sur page perso
router.post("/", token, multer, postsCtrl.createPost) // Créer une image
// router.delete("/:id", postsCtrl.deletPost) // Effacer un post

module.exports = router