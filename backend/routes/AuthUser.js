const express = require("express")
const router = express.Router()

// ============================================ ROUTES =================================================
const userCtrl = require("../controllers/Authser")
const auth = require("../middleware/auth")

router.post("/signup", userCtrl.signup) // Route pour créer user
router.post("/login", userCtrl.login) // Route pour connecter user
// router.get("/test", auth, (req, res) => {
//     res.send("connecter")
// })
module.exports = router