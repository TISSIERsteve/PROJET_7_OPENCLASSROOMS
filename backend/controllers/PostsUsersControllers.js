const db = require("../config/mysql")

exports.getAllPosts = (req, res) => {

}

exports.getOnePost = (req, res) => {

}

exports.createPost = (req, res) => {
    console.log(req.body);
    const content = req.body.legende;
    const media_url = req.body.media_url;

    const media = {
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