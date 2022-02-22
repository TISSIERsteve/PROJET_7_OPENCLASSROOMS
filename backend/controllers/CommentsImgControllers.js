const db = require("../config/mysql");

// Créer un commentaire sur une image sur Page accueil
exports.createCommentImg = (req, res, next) => {
    const { commentaires, compte, fk_id_post } = req.body;

    const messageimg = {
        content: commentaires,
        fk_id_user: compte,
        fk_id_post: fk_id_post,
    };

    db.query("INSERT INTO comment set ? ", messageimg,
        (err, result) => {
            if (err) {
                return res.status(403).json({ message: "Accès refusé pour commenter l'image" });
            } else {
                return res.status(200).json({ message: "Message personnel sur image créer" });
            }
        });
};

// Récupérer les commentaires d'une image des utilisateurs qui m'ont commenter sur la page accueil
exports.getAllCommentsImg = (req, res, next) => {
    const id_message = req.params.id;

    db.query(
        `SELECT comment_id, content, user_id, prenom FROM comment JOIN user ON fk_id_user = user_id WHERE fk_id_post = ? ORDER BY content DESC`,
        [id_message],
        (err, result) => {
            if (err) {
                return res.status(403).json({ message: "Accès refusé du commentaire poster" });
            } else {
                return res.status(200).json({
                    result
                });
            }
        }
    );
};

// Récupérer les commentaires d'une image des utilisateurs qui m'ont commenter sur la page perso
exports.getOneCommentImg = (req, res, next) => {

    db.query(
        `SELECT comment_id, content, user_id, prenom FROM comment JOIN user ON fk_id_user = user_id WHERE fk_id_post = ? ORDER BY content DESC`,

        (err, result) => {
            if (err) {
                return res.status(403).json({ message: "Accès refusé du commentaire poster" });
            } else {
                return res.status(200).json({
                    result
                });
            }
        }
    );
};

// Modifier un commentaire image perso sur page accueil
exports.updateCommentImg = (req, res, next) => {
    console.log(req.params);
    console.log("yes");
    // const id = req.params.id
    // const commentaire = req.body.commentaire;

    // db.query(`UPDATE comment SET content = ? WHERE comment_id = ${id}`,
    //     [commentaire],
    //     (err, result) => {
    //         if (err) {
    //             return res.status(403).json({ message: "Accés refusé pour la modification de l'image" })
    //         } else {
    //             return res.status(200).json({ message: "Message modifié" })
    //         }
    //     }
    // )
}