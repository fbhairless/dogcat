$(document).ready(function() {
  /*$("button#meowbutton").click(function() {
    $("#meowing").slideToggle(100);
  });

  $("button#barkbutton").click(function() {
    $("#barking").slideToggle(100);
  });*/

  $("button#meowbutton").click(function() {
    $("#meowing").before("<h1>Meowwwwww</h1>"); 
    $("h1").fadeIn();
  });


  $("button#barkbutton").click(function() {
    $("#barking").after("<h1>WOOOF!</h1>");
  });











});
