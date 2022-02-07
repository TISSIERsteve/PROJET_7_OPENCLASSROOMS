const db = require("../config/mysql")

// Récupérer tous les commentaires des utilisateurs qui m'ont commenter fait sur ma page perso
// exports.getAllComments = (req, res, next) => {
// const idy = req.params.id
// // console.log(idy);

// db.query(`SELECT content ,prenom FROM comment WHERE fk_id_message=?`,
//     [idy],
//     (err, result) => {
//         if (err) {
//             res.status(403).json({ message: "Accès refusé du commentaire poster" })
//             console.log("erreur");
//         } else {
//             res.status(200).json({
//                 result
//             });
//             console.log(result)
//         }
//     });
// }

// Récupérer les commentaires poster par les utilisateurs sur la page accueil
exports.getOneComment = (req, res, next) => {
    const id_message = req.params.id

    db.query(`SELECT content FROM comment WHERE fk_id_message=?`,
        [id_message],
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du commentaire poster" })
                console.log("erreur");
            } else {
                res.status(200).json({
                    result
                });
                console.log(result);
            }
        });
}

// Créer un commentaire sur Page accueil
exports.createComment = (req, res, next) => {
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
exports.deleteComment = (req, res, next) => {

}