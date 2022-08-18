const express = require("express");
const app = express();
const PORT = process.env.PORT || 3004;
const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//route to index page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

//route to notes
app.get("/public/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

//return all JSON input
app.get("/public/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "Develop/db/db.json"));
});


app.get("/notes", (req, res) => res.sendFile(__dirname + "/Develop/public/notes.html"));
// return index.html after written
app.get("*", (req, res) => res.sendFile(__dirname + "/Develop/public/index.html"));

//listen tot he port when deployed
app.listen(PORT, () => console.log("Server listening on port " + PORT));