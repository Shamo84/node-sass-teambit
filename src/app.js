let $ = require('jquery');

$(document).ready(function() {
  // hover su solutions
  $("#solutions").hover(function() {
    $(this).children(".dropdown").removeClass("hidden");
  }, function() {
    $(this).children(".dropdown").addClass("hidden");
  });
  $(document).on("click", function(event) {
    // click su bars
    if ($(event.target).hasClass("fa-bars")) {
      $(event.target).toggleClass("fa-bars fa-times");
      $(event.target).parents("#navbar").children(".bars_dropdown").removeClass("hidden");
    // click su X
    } else if ($(event.target).hasClass("fa-times")) {
      $(event.target).toggleClass("fa-bars fa-times");
      $(event.target).parents("#navbar").children(".bars_dropdown").addClass("hidden");
    }
  });
});
