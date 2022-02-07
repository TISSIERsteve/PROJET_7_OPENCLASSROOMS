const db = require("../config/mysql")

exports.getAllPosts = (req, res) => {

    // db.query("SELECT post_id,title, content, fk_id_user FROM post ",
    //     (err, result) => {
    //         if (err) {
    //             res.status(403).json({ message: "Accès refusé reception des images" })
    //         } else {
    //             res.status(200).json({
    //                 result
    //             });
    //         }
    //     });
}

exports.getOnePost = (req, res) => {

}

// Poster une image
exports.createPost = (req, res, next) => {
    const content = req.body.legende;
    const media_url = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    const media = {
        title: content,
        content,
        media_url,
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