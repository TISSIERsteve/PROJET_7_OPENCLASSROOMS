const db = require("../config/mysql")

// Récupérer tous les commentaires
exports.getAllComments = (req, res) => {

}

// Récupérer un commentaire
exports.getOneComment = (req, res) => {
    // const id = req.body.id

    db.query(`SELECT comment_id FROM comment WHERE fk_id_user `,
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

// Créer un commentaire sur ProfileScreen
exports.createComment = (req, res) => {
    const content = req.body.commentaires;
    const id = req.body.compte

    const messageperso = {
        content,
        fk_id_user: id,
    }

    db.query(
        'INSERT INTO comment set ?',
        messageperso,
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé" })
            } else {
                res.status(200).json({ message: "Message personnel créer" });
            }
        }
    );
}

// Effacer un commentaire
exports.deleteComment = (req, res) => {

}