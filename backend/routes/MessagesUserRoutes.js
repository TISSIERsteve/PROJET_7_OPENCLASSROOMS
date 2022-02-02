const { Router } = require("express")
const express = require("express")
const router = express.Router()
// const token = require("../middleware/AuthTokenMiddleware")

// ============================================ ROUTES ======================================================
const messagesCtrl = require("../controllers/MessagesUsersControllers")

router.post("/", messagesCtrl.createMessage) // Créer un message
router.get("/", messagesCtrl.getAllMessages) // Obtenir tous les messages des utilisateurs
router.get("/:id", messagesCtrl.getOneMessage) // Obtenir un message personnel d'un utilisateur
router.delete("/:id", messagesCtrl.deleteMessage) // Effacer un message

module.exports = router