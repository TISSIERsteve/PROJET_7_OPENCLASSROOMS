const db = require("../config/mysql")

// Récupérer tous les commentaires
exports.getAllComments = (req, res) => {

}

// Récupérer un commentaire
exports.getOneComment = (req, res) => {
    const id_message = req.params.id

    db.query(`SELECT comment.content, user.prenom FROM Comment JOIN user ON comment.fk_id_user = user.user_id WHERE fk_id_message`, [id_message],
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du post de messageperso" })
            } else {
                res.status(200).json({
                    result
                });
                console.log(result)
            }
        });
}

// Créer un commentaire sur ProfileScreen
exports.createComment = (req, res) => {
    const { commentaires, compte, id_post } = req.body

    const messageperso = {
        content: commentaires,
        fk_id_user: compte,
        fk_id_message: id_post
    }

    db.query(
        'INSERT INTO comment set ?',
        messageperso,
        (err, result) => {
            if (err) {
                console.log(err);
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