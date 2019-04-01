/* global moment */

// When the page loads, grab and display all of our burgers
$.get("/api/all", function (data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("burger");
      row.append("<p>" + data[i].burgerName + " burgered.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      // row.append("<p>" + data[i].updateBurger + "</p>");
      $("#burger-area").prepend(row);
    }
  }
});

// When user burgers (clicks addBtn)
$("#burger-submit").on("click", function (event) {
  event.preventDefault();

  // Make a newburger object
  var newburger = {
    burgerName: $("#burgerName").val().trim(),
    // updateBurger: $("#updateBurger").val().trim(),
  };

  console.log(newburger);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newburger)
    //   // On success, run the following code
    .then(function (resBurger) {
      //     connection.query("SELECT * FROM products", function (err, results) {
      console.log(resBurger);
      //       if (err) throw err;
      //     var row = $("<div>");
      //     row.addClass("burger");

      //     row.append("<p>" + newburger.devoured + " burgered: </p>");
      //     // row.append("<p>" + newburger.body + "</p>");
      //     // row.append("<p>At " + moment(newburger.burgerName).format("h:mma on dddd") + "</p>");

      //     $("#burger-area").prepend(row);

    });

  // prompt for info abou

  // Empty each input box by replacing the value with an empty string
  $("#burgerName").val("");
  $("#updateBurger-box").val("");
  // })
});
