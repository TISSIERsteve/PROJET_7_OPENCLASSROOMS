const express = require("express")
const router = express.Router()

// ============================================ ROUTES =================================================
const authCtrl = require("../controllers/AuthUsersControllers")

router.post("/signup", authCtrl.signup) // Création utilisateur
router.post("/login", authCtrl.login) // Connexion utilisateur
router.delete("/:id", authCtrl.dessactive) // Effacer utilisateur
// router.get("/signout", authCtrl.signout) // Deconnecter utilisateur




module.exports = router