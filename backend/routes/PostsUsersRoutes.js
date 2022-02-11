const express = require("express")
const router = express.Router()
const multer = require("../middleware/multer-config")
const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const postsCtrl = require("../controllers/PostsUsersControllers")

router.get("/", token, postsCtrl.getAllPosts) // Obtenir toutes les images des utilisateurs sur page accueil
router.get("/:id", postsCtrl.getOnePost) // Obtenir toutes les images perso sur page perso
router.post("/", token, multer, postsCtrl.createPost) // Créer une image sur page accueil
router.delete("/:id", postsCtrl.deletePost) // Effacer une image sur page perso

module.exports = router