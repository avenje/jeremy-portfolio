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
};
getYear();
 
function updatedStamp() {
  let lastUpdate = document.lastModified;
  const length = 10;
  let stamp = lastUpdate.substring(0, length);
  $("#updatedStamp").text("Last updated on " + stamp);
}
updatedStamp();