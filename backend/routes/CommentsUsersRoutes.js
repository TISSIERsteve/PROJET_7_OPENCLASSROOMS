const express = require("express")
const router = express.Router()
const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const commentsCtrl = require("../controllers/CommentsUsersControllers")
token,
    router.get("/", token, commentsCtrl.getAllComments) // Obtenir tous les commentaires des utilisateurs sur persoprofilescreen
router.get("/:id", token, commentsCtrl.getOneComment) // Obtenir un commentaire d'un utilisateur
router.post("/", token, commentsCtrl.createComment) // Créer un commentaire
// router.delete("/:id", commentsCtrl.deleteComment) // Effacer un commentaire

module.exports = router