let $ = require('jquery');

$(document).ready(function() {
  $("#solutions").hover(function() {
    $(this).children(".dropdown").removeClass("hidden");
  }, function() {
    $(this).children(".dropdown").addClass("hidden");
  });
  $(document).on("click", function(event) {
    if ($(event.target).hasClass("fa-bars")) {
      $(event.target).toggleClass("fa-bars fa-times");
      $(event.target).parents("#navbar").children(".bars_dropdown").removeClass("hidden");
    } else if ($(event.target).hasClass("fa-times")) {
      $(event.target).toggleClass("fa-bars fa-times");
      $(event.target).parents("#navbar").children(".bars_dropdown").addClass("hidden");
    }
  });
});
