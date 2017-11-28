$(document).ready(function() {

// carousel
$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
});



$('#subscribe-button').on('submit', function(event) {
  event.preventDefault();
  if ( !$('#email').val() == '') { 
    alert('Thank you for subscribing!');
  } else {
      alert('Please enter a valid email address.');
    }
});





// email subscription
// $("#subscribe-button").click(function() {

//   var emailAddress = $("#subscribe-email").val();
  
//   if (emailAddress.includes("@")) {
//     alert ("Thanks for subscribing " + emailAddress + "!");
//   }
//   else
//     { alert ( emailAddress  + " is an invalid email");
//   }
          
// });

// add to cart counter

var count = 0;
$('.add-cart').click(function() {
  count++;
  $('.counter').html(count);

});

// adjust scroll target https://gist.github.com/HoundstoothSTL/5510082

$('a[href*="#"]').not('a[href="#"]').on(function() {
  var target = $(this.hash),
  headerHeight = $("header").outerHeight(); // Get fixed header height
        
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top - headerHeight
    }, 500);
    return false;
  }
});

//fix screen reader bugs

$(function() {
  $("a[href^='#']").not("a[href='#']").click(function() {
     $("#"+$(this).attr("href").slice(1)+"").focus();
  });
});
});