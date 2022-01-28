const db = require("../config/mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Création compte
exports.signup = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            throw (err)
        }
        const user = {
            nom,
            prenom,
            password: hash,
            email
        }

        db.query(
            "INSERT INTO user set ?",
            user,
            (err, result) => {
                if (err) {
                    // console.log(err);
                    res.status(403).json({ message: "Accès refusé" })
                } else {
                    res.status(200).json({ message: "Succès utilisateur créer" });
                }
            }
        );
    })
};

// Connexion au compte
exports.login = (req, res) => {
    console.log(req.body);
    const password = req.body.password;
    const email = req.body.email;

    db.query(
        `SELECT * FROM user WHERE email = ?`,
        [email],
        async (err, result) => {
            if (err) {
                console.log(err);
                return res.status(403).json({ message: "Accès refusé" })
            }
            if (result.length) {
                const passwordOk = await bcrypt.compare(password, result[0].password)
                console.log(passwordOk);
                if (passwordOk) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        id: result[0].user_id
                    }, "RANDOM_PRIVATE_KEY")

                    res.status(200).json({
                        message: "Connecté",
                        token,
                        user: {
                            id: result[0].user_id,
                            email: result[0].email,
                            prenom: result[0].prenom
                        }

                    })
                }
            } else {
                res.status(404).json({ message: "Erreur serveur" })
            }
        });
    ;
}