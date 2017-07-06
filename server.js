// Require the following npm packages inside of the server.js file:

// express
// method-override
// body-parser

//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

//serves the public directory for access
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/api-routes.js");

app.use("/", routes);

app.listen(PORT);