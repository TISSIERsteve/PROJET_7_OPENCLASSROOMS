// const { Router } = require("express")
const express = require("express")
const router = express.Router()
const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const messagesCtrl = require("../controllers/MessagesUsersControllers")

router.post("/", token, messagesCtrl.createMessage) // Créer un message sur page accueil
router.get("/", token, messagesCtrl.getAllMessages) // Obtenir tous les messages des utilisateurs sur page accueil
router.get("/:id", token, messagesCtrl.getOneMessage) // Obtenir mes messages personnels sur page perso
router.delete("/:id", token, messagesCtrl.deleteMessage) // Effacer un message sur page perso
router.put("/:id", token, messagesCtrl.updateMessage) // Modifier message perso sur page perso

module.exports = router