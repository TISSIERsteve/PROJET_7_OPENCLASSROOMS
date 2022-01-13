const express = require("express")
const app = express()
app.use(express.json())

const connectionMysql = require("./config/mysql")
connectionMysql()


app.listen(3001, () => console.log(`Serveur en route sur port `))