var express = require("express");
require("dotenv").config();
var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory to be served

// Routes
// =============================================================
require("./app/controllers/burger-controller.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
