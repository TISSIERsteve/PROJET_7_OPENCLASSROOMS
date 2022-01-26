const express = require("express")
const router = express.Router()

// ============================================ ROUTES =================================================
const authCtrl = require("../controllers/AuthUsersControllers")

router.post("/signup", authCtrl.signup) // Création utilisateur
router.post("/login", authCtrl.login) // Connexion utilisateur
// router.get("/signout", userCtrl.signout) // Deconnecter utilisateur
// router.get("/dessactive/:id", userCtrl.dessactive) // Dessactiver utilisateur




module.exports = router