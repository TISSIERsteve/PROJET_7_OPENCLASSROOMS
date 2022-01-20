const db = require("../config/mysql")

exports.signup = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const password = req.body.password;
    const email = req.body.email;


    db.query(
        "INSERT INTO user (nom, prenom, password, email) VALUES (?,?,?,?)",
        [nom, prenom, password, email],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Utilisateur enregistrer");
            }
        }
    );
};