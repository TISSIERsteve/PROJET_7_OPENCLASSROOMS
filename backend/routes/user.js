const express = require("express")
const router = express.Router()

// ============================================ ROUTES =================================================
const userCtrl = require("../controllers/user")

router.post("/user", userCtrl.signup) // Route pour créer user

module.exports = router