const db = require("../config/mysql")

exports.getAllMessages = (req, res) => {

}

exports.getOneMessage = (req, res) => {

}

exports.createMessage = (req, res) => {
    const prenom = req.body.prenom;
    const commentaire = req.body.commentaire;

    const user = {
        prenom,
        commentaire
    }

    db.query(
        "INSERT INTO user set ?",
        user,
        (err, result) => {
            console.log(err);
            if (err) {
                res.status(403).json({ message: "Accès refusé" })
            } else {
                res.status(200).json({ message: "Succès utilisateur créer" });
            }
        }
    );
}

exports.deleteMessage = (req, res) => {

}