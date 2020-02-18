let $ = require('jquery');

$(document).ready(function() {
  $("#solutions").hover(function() {
    $(this).children(".dropdown").removeClass("hidden");
  }, function() {
    $(this).children(".dropdown").addClass("hidden");
  });

  $(".nav_container > i.fas").click(function() {
    $(this).toggleClass("fa-bars fa-times");
  });
});
