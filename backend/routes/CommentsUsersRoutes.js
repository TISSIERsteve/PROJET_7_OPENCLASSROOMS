const express = require("express")
const router = express.Router()
const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const commentsCtrl = require("../controllers/CommentsUsersControllers")

router.get("/", token, commentsCtrl.getAllComments) // Obtenir un commentaire d'un utilisateur sur page accueil
router.get("/:id", token, commentsCtrl.getOneComment) // Obtenir les commentaires d'un utilisateur sur page perso
router.post("/", token, commentsCtrl.createComment) // Créer un commentaire sur page accueil
// router.delete("/:id", commentsCtrl.deleteComment) // Effacer un commentaire

module.exports = router