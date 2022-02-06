const express = require("express")
const router = express.Router()
// const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const commentsCtrl = require("../controllers/CommentsUsersControllers")

router.get("/", commentsCtrl.getAllComments) // Obtenir tous les commentaires des utilisateurs sur persoprofilescreen
router.get("/:id", commentsCtrl.getOneComment) // Obtenir un commentaire d'un utilisateur
router.post("/", commentsCtrl.createComment) // Créer un commentaire
// router.delete("/:id", commentsCtrl.deleteComment) // Effacer un commentaire

module.exports = router