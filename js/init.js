(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.carousel').carousel();
});

function getYear() {
  let today= new Date();
  let currentYear= today.getFullYear();
  $("#currentYear").text(currentYear + " | Jeremy Avenarius");
  console.log(currentYear);
};
getYear();
    