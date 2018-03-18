// Parallax function for Contact Me map
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// Materialize Carousel function
$(document).ready(function(){
  $('.carousel').carousel();
});

// Display current year in footer automatically
function getYear() {
  const today= new Date();
  let currentYear= today.getFullYear();
  $("#currentYear").text(currentYear + " | Jeremy Avenarius");
};
getYear();

// Last modified stamp in footer
function updatedStamp() {
  const lastUpdate = document.lastModified;
  const length = 10;
  let stamp = lastUpdate.substring(0, length);
  $("#updatedStamp").text("Last updated on " + stamp);
}
updatedStamp();

// Shorten my name for smaller screen widths
function shortenName() {
  if (window.innerWidth < 500) {
    $("#myName").text("Jeremy\u00A0A.");
  } else {
    $("#myName").text("\u00A0\u00A0Jeremy\u00A0Avenarius");
  }
};
window.addEventListener("resize", shortenName());
