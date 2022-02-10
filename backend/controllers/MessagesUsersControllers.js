const db = require("../config/mysql");

// Obtenir tous les messages pubiés des utilisateurs sur Page accueil
exports.getAllMessages = (req, res, next) => {
    db.query(
        "SELECT message_perso_id,prenom,DATE_FORMAT(date, 'le %d %m %Y à %H:%i') AS date,commentaire, fk_id_user FROM messageperso ORDER BY date DESC ",
        (err, result) => {
            if (err) {
                res
                    .status(403)
                    .json({ message: "Accès refusé reception des messageperso" });
            } else {
                res.status(200).json({
                    messageperso: {
                        resultat: result
                    }
                });
            }
        }
    );
};

// Obtenir tous mes messages personnels publiés sur Page Perso
exports.getOneMessage = (req, res, next) => {
    const id = req.params.id;
    db.query(
        `SELECT message_perso_id,prenom,DATE_FORMAT(date, 'Le %d %m %Y à %H:%i vous avez publier') AS date,commentaire, fk_id_user FROM messageperso WHERE fk_id_user = ? ORDER BY date DESC`,
        [id],
        (err, result) => {
            if (err) {
                res
                    .status(403)
                    .json({ message: "Accès refusé du post de messageperso" });
            } else {
                res.status(200).json({
                    result
                });
            }
        }
    );
};

// Créer un message sur Page accueil
exports.createMessage = (req, res, next) => {
    const prenom = req.body.prenom;
    const commentaire = req.body.commentaire;
    const id = req.body.id;

    const messageperso = {
        prenom,
        commentaire,
        fk_id_user: id
    };

    db.query("INSERT INTO messageperso set ?", messageperso, (err, result) => {
        if (err) {
            res.status(403).json({ message: "Accès refusé" });
        } else {
            res.status(200).json({ message: "Message créer" });
        }
    });
};

// Effacer ma publication perso sur Page perso
exports.deleteMessage = (req, res, next) => {
    const persoId = req.params.id;

    db.query(
        "DELETE FROM messageperso WHERE message_perso_id = ?",
        [persoId],
        (err, result) => {
            if (err) {
                console.log("erreur backend modification");
                res.status(403).json({ message: "Accés refusé" });
            } else {
                res.status(200).json({ message: "Message supprimer" });
                result
                console.log("bon c'est modifier");
            }
        }
    );
};

// Modifier message perso sur page perso
exports.updateMessage = (req, res, next) => {
    console.log(req);
    const id = req.body.id

    db.query(`UPDATE messageperso SET commentaire = ? WHERE id = ${id}`,

        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accés refusé" })
                console.log(err);
            } else {
                res.status(200).json({ message: "Message modifié" })
            }
        }
    )
}