require('dotenv').config();
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/patty_controlers.js");
app.use(routes);
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});