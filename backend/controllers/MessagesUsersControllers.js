const db = require("../config/mysql")

exports.getAllMessages = (req, res) => {

    db.query("SELECT * FROM messageperso", (err, result) => {
        if (err) {
            res.status(403).json({ message: "Accès refusé du post de messageperso" })
        } else {
            res.status(200).json({
                message: "Messageperso renvoyer sur page",
                messageperso: {
                    // prenom: result[0].prenom,
                    // commentaire: result[0].commentaire
                    prenom: result.map((x) => x.prenom),
                    commentaire: result.map((x) => x.commentaire)
                }

            });
        }
    });
    ;
}

exports.getOneMessage = (req, res) => {

}

exports.createMessage = (req, res) => {
    const prenom = req.body.prenom;
    const commentaire = req.body.commentaire;

    const messageperso = {
        prenom,
        commentaire
    }

    db.query(
        "INSERT INTO messageperso set ?",
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