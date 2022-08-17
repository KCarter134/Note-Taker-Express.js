const fs = require("fs");
const express = require("express");
const path = require("path");

// allows for use of express app
const app = express();
// Sets port for listening and serving
const PORT = process.env.PORT || 3002;

//serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => console.log("Server listening on port " + PORT));