const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const animalRouter = require("");
const Pokemon = require("./model/Animal.js");

app.set("views", "./views");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", animalRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
});

require("./Config/database.js");