const db = require("../config/mysql")

// Obtenir tous les messages des utilisateurs sur ProfileScreen
exports.getAllMessages = (req, res) => {

    db.query("SELECT message_perso_id,prenom,DATE_FORMAT(date, 'Le %d %m %I à %H:%i') AS date,commentaire, fk_id_user FROM messageperso ORDER BY date DESC ", (err, result) => {
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

    db.query(`SELECT message_perso_id,prenom,DATE_FORMAT(date, 'Le %d %m %I à %H:%i vous avez publier') AS date,commentaire, fk_id_user FROM messageperso WHERE fk_id_user = ? ORDER BY date DESC`,
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

// Créer un message sur ProfileScreen
exports.createMessage = (req, res) => {
    const prenom = req.body.prenom;
    const commentaire = req.body.commentaire;
    const id = req.body.id

    const messageperso = {
        prenom,
        commentaire,
        fk_id_user: id,
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

// Effacer un message perso sur ProfilePersoScreen
exports.deleteMessage = (req, res) => {
    const persoId = req.params.id

    db.query("DELETE FROM messageperso WHERE message_perso_id = ?",
        [persoId],
        (err, result) => {
            if (err) {
                // console.log(err);
                res.status(403).json({ message: "Accés refusé" })
            } else {
                res.status(200).json({ message: "Message supprimer" })
            }
        });
}