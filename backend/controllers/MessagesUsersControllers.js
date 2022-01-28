const db = require("../config/mysql")

// Obtenir tous les posts des utilisateurs sur ProfileScreen
exports.getAllMessages = (req, res) => {
    db.query("SELECT * FROM messageperso", (err, result) => {

        if (err) {
            res.status(403).json({ message: "Accès refusé reception des messageperso" })
        } else {
            res.status(200).json({
                messageperso: {
                    resultat: result.filter((x) => x.prenom),
                }
            });
        }
    });
}

// Obtenir nos messages personnels sur ProfilePersoScreen
exports.getOneMessage = (req, res) => {
    db.query("SELECT * FROM messageperso  WHERE fk_id_user = ?", (err, result) => {

        if (err) {
            res.status(403).json({ message: "Accès refusé du post de messageperso" })
        } else {
            res.status(200).json({
                messagePersoUtilisateur: {
                    resultatCommentaire: result,
                }
            });
        }
    });
}

// Créer et poster un message sur ProfileScreen
exports.createMessage = (req, res) => {
    const prenom = req.body.prenom;
    const commentaire = req.body.commentaire;

    const messageperso = {
        prenom,
        commentaire
    }

    db.query(
        "INSERT INTO messageperso set ?",
        messageperso,
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé" })
            } else {
                res.status(200).json({ message: "Message créer" });
            }
        }
    );
}

exports.deleteMessage = (req, res) => {

}