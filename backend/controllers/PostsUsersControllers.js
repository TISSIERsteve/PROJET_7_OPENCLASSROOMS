const db = require("../config/mysql")

// Récupérer toutes les images des utilisateurs sur page accueil
exports.getAllPosts = (req, res, next) => {

    db.query("SELECT prenom, DATE_FORMAT(created_at, 'Le %d %m %Y à %H:%i') AS created_at ,post_id,title, media_url, content, fk_id_user FROM post JOIN user ON post.fk_id_user = user.user_id ORDER BY created_at DESC",
        (err, result) => {
            if (err) {
                res.status(403).json({ message: "Accès refusé reception des images(accueil)" })
            } else {
                res.status(200).json({
                    result
                });
            }
        });
}

// Récupère toutes mes images sur ma page perso 
exports.getOnePost = (req, res, next) => {
    const id = req.params.id;

    db.query("SELECT prenom, DATE_FORMAT(created_at, 'Le %d %m %Y à %H:%i') AS created_at ,post_id,title, media_url, content, fk_id_user FROM post JOIN user ON post.fk_id_user = user.user_id WHERE fk_id_user=? ORDER BY created_at DESC",
        [id],
        (err, result) => {
            if (err) {
                res
                    .status(403)
                    .json({ message: "Accès refusé reception des images(perso)" });
            } else {
                res.status(200).json({
                    result
                });
            }
        }
    );
}

// Poster une image sur page accueil
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

// Effacer une image sur page perso
exports.deletePost = (req, res, next) => {
    console.log(req.params);
    const persoId = req.params.id;

    db.query(
        "DELETE FROM post WHERE post_id = ?",
        [persoId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(403).json({ message: "Accés refusé" });
            } else {
                res.status(200).json({ message: "Image supprimer" });
                result
                console.log("supprimer");
            }
        }
    );
}