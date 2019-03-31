// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all burgers
  app.get("/api/all", function (req, res) {
    var dbQuery = "SELECT * FROM burgers";

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  //
  app.get("/api/:id", function (req, res) {
    var dbQuery = "SELECT * FROM burgers WHERE id = ?";
    var id = req.params.id;
    connection.query(dbQuery, [id], function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
  // Add a burger 
  app.post("/api/new", function (req, res) {
    console.log("burger Data:" + req);
    console.log(req.body);

    var dbQuery = "INSERT INTO burgers (burger_name, updateBurger) VALUES (?,?)";
    // id: 2,
    // burgerType: "burger2",
    // devoured: false
    connection.query(dbQuery, [burgerName, 1], function (err, result) {
      // connection.query(dbQuery, [id, req.body.burgerName, req.body.devoured], function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log("burger created Successfully!");
      res.end();
    });

    app.delete("/api/delete/:id", function (req, res) {
      var dbQuery = "DELETE FROM burgers WHERE id = ?";
      var id = req.params.id;
      connection.query(dbQuery, [id], function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log("you have successfully deleted id :" + id);
        res.end();
      });
    });
  });
};
