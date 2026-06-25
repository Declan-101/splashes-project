/* =========================================================
   SPLASHES WEBSITE JAVASCRIPT
   General scripts used across the website
========================================================= */


/* =========================================================
   1. Page Ready Check
========================================================= */

$(document).ready(function(){
    console.log("Splashes website loaded");
});


/* =========================================================
   2. Contact Form Message
   This stops the form from refreshing the page and gives
   the user a simple confirmation message.
========================================================= */

$("#contact-form").on("submit", function(event){
    event.preventDefault();

    alert("Thank you for your message. Splashes will get back to you soon.");
});