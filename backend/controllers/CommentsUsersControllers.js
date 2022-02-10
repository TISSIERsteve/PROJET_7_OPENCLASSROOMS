const db = require("../config/mysql");

// Récupérer les commentaires des utilisateurs qui m'ont commenter sur ma page perso
exports.getAllComments = (req, res, next) => {
    db.query(
        `SELECT content,  user_id, prenom FROM comment JOIN User ON fk_id_user = user_id WHERE fk_id_message`,
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du commentaire poster" });
                console.log("erreur");
            } else {
                res.status(200).json({
                    result
                });
                console.log("le resultat est " + result);
            }
        }
    );
};

// Récupérer les commentaires des utilisateurs qui m'ont commenter sur la page accueil
exports.getOneComment = (req, res, next) => {
    const id_message = req.params.id;

    db.query(
        `SELECT content, user_id, prenom FROM comment JOIN user ON fk_id_user = user_id WHERE fk_id_message=?`,
        [id_message],
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du commentaire poster" });
            } else {
                res.status(200).json({
                    result
                });
            }
        }
    );
};

// Créer un commentaire sur Page accueil
exports.createComment = (req, res, next) => {
    const { commentaires, compte, id_post } = req.body;

    const messageperso = {
        content: commentaires,
        fk_id_user: compte,
        fk_id_message: id_post
    };

    db.query("INSERT INTO comment set ?", messageperso, (err, result) => {
        if (err) {
            console.log(err);
            res.status(403).json({ message: "Accès refusé" });
        } else {
            res.status(200).json({ message: "Message personnel créer" });
        }
    });
};

// Effacer un commentaire
exports.deleteComment = (req, res, next) => { };
