
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

app.get("/burgers", function (req, res) {
  res.render("burgers", burgers);
});

// app.get("/all-burgers", function (req, res) {
//   // Handlebars requires an object to be sent to the index handlebars file.

//   // 2. Loop through the burgers, and send those that are pets to the index handlebars file.
//   var data = {
//     burgers: []
//   };

//   for (var i = 0; i < burgers.length; i += 1) {
//     // Get the current burger.
//     var devoured = burgers[i];

//     // Check if this burger is a pet.
//     if (devoured.pet) {
//       // If so, push it into our data.burgers array.
//       data.burgers.push(devoured);
//     }
//   }

//   res.render("index", data);
// });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
