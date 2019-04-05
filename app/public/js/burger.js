/* global moment */

// When the page loads, grab and display all of our burgers
$.get("/api/all", function(data) {
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

// When user clicks submit Btn to add burgers
$("#burger-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newburger object
  var newburger = {
    burgerName: $("#burgerName")
      .val()
      .trim()
    // updateBurger: $("#updateBurger").val().trim(),
  };
  console.log(newburger);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newburger)
    //   // On success, run the following code
    .then(function(resBurger) {
      console.log(resBurger);
    });
  // Empty each input box by replacing the value with an empty string
  $("#burgerName").val("");
});

//When user clicks devour button
$(".devouredBtn").on("click", function(event) {
  event.preventDefault();
  console.log("delete button pressed");
  // Get the ID from the button.
  var id = $(this).data("burgerNameid");
  console.log(id);
  // Send the DELETE request.
  $.ajax("/api/burger/" + id, {
    method: "DELETE"
  }).then(function() {
    console.log("deleted id ", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
