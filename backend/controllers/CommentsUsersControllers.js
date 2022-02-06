const db = require("../config/mysql")

// Récupérer tous les commentaires des utilisateurs sur ma page perso
exports.getAllComments = (req, res) => {
    // console.log(req.params);
    // const message = req.params.id

    db.query(`SELECT content,  user_id, prenom FROM comment JOIN User ON fk_id_user = user_id WHERE fk_id_message`,
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du commentaire poster" })
            } else {
                res.status(200).json({
                    result
                });
                console.log(result)
            }
        });
}

// Récupérer les commentaires poster par les utilisateurs sur la page d'accueil
exports.getOneComment = (req, res) => {
    const id_message = req.params.id

    db.query(`SELECT content FROM comment WHERE fk_id_message=?`, [id_message],
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du commentaire poster" })
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