const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.static('./app/public'));

app.get("/", function(req, res){
    res.render("index");
})

app.listen(8080);
console.log("Servidor iniciado");