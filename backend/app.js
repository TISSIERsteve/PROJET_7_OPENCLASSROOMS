const express = require("express")
const app = express()
app.use(express.json())

// Connection à la base de données
const db = require("./config/mysql")
db()

app.post("/create", (req, res) => {
    const name = req.body.name;
    const firstname = req.body.firstname;
    const email = req.body.email;
    const password = req.body.password;
    // const confirmPassword = req.body.confirmPassword;

    db.query(
        "INSERT INTO user (name, firstname, email, password,) VALUES (?,?,?,?)",
        [name, firstname, email, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Enregistrement utilisateur effectués");
            }
        }
    );
});



module.exports = app