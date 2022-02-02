const db = require("../config/mysql")

// Obtenir tous les posts des utilisateurs sur ProfileScreen
exports.getAllMessages = (req, res) => {

    db.query("SELECT * FROM messageperso ORDER BY date ASC ", (err, result) => {
        if (err) {
            res.status(403).json({ message: "Accès refusé reception des messageperso" })

        } else {
            res.status(200).json({
                messageperso: {
                    resultat: result
                }
            });
        }
    });
}

// Obtenir nos messages personnels sur ProfilePersoScreen
exports.getOneMessage = (req, res) => {
    const id = req.params.id

    db.query(`SELECT * FROM messageperso WHERE fk_id_user = ? ORDER BY date ASC`,
        [id],
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du post de messageperso" })
            } else {
                res.status(200).json({
                    result
                });
            }
        });
}

// Créer et poster un message sur ProfileScreen
exports.createMessage = (req, res) => {
    const prenom = req.body.prenom;
    const commentaire = req.body.commentaire;
    const id = req.body.id

    const messageperso = {
        prenom,
        commentaire,
        fk_id_user: id,
        date: new Date().toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
    }

    db.query(
        'INSERT INTO messageperso set ?',
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
    const persoId = req.params.id
    console.log(persoId);

    db.query("DELETE FROM messageperso WHERE message_perso_id = ?",
        [persoId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(403).json({ message: "Accés refusé" })
            } else {
                res.status(200).json({ message: "Message supprimer" })
            }
        });
}