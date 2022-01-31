const db = require("../config/mysql")

// Obtenir tous les posts des utilisateurs sur ProfileScreen
exports.getAllMessages = (req, res) => {
    db.query("SELECT * FROM messageperso", (err, result) => {

        if (err) {
            res.status(403).json({ message: "Accès refusé reception des messageperso" })
        } else {
            res.status(200).json({
                messageperso: {
                    resultat: result,
                }
            });
        }
    });
}

// Obtenir nos messages personnels sur ProfilePersoScreen
exports.getOneMessage = (req, res) => {
    // const id = req.params.id
    // console.log(id);

    db.query(`SELECT * FROM messageperso `,
        // id,
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé du post de messageperso" })
            } else {
                res.status(200).json({
                    id: result[0].id,
                    commentaire: result.filter((x) => console.log(x))
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
        id,
        prenom,
        commentaire,
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

}