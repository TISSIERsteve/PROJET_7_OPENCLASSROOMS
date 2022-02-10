const db = require("../config/mysql")

// Récupérer toutes les images des utilisateurs sur page accueil
exports.getAllPosts = (req, res) => {

    db.query("SELECT prenom, DATE_FORMAT(created_at, 'Le %d %m %Y à %H:%i') AS created_at ,post_id,title, media_url, content, fk_id_user FROM post JOIN user ON post.fk_id_user = user.user_id ORDER BY created_at DESC",
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé reception des images" })
            } else {
                res.status(200).json({
                    result
                });
            }
        });
}

// Récupère toutes mes images sur ma page perso (pas fini)
exports.getOnePost = (req, res, next) => {
    const id = req.params.id;

    db.query("SELECT prenom, DATE_FORMAT(created_at, 'Le %d %m %Y à %H:%i') AS created_at ,post_id,title, media_url, content, fk_id_user FROM post JOIN user ON post.fk_id_user = user.user_id WHERE fk_id_user=? ORDER BY created_at DESC",
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
}

// Poster une image
exports.createPost = (req, res, next) => {
    const content = req.body.legende;
    const media_url = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    const media = {
        title: content,
        // content,
        media_url,
        fk_id_user: req.body.fk_id_user
    }

    db.query(
        'INSERT INTO post set ?',
        media,
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé" })
            } else {
                res.status(200).json({ message: "Image créer" });
            }
        }
    );
}

exports.deletePost = (req, res) => {

}