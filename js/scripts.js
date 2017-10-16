// carousel
$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
});


// email subscription
$("#subscribe-button").click(function() {

  var y = $("#subscribe-email").val();
  
  if (y.includes("@")) {
        alert ("Thanks for subscribing " + y + "!");
  }
  else
    { alert ( y  + " is an invalid email");
  }
          
    });

// add to cart counter

var count = 0;
$('.add-cart').click(function() {
  count++;
  $('.counter').html(count);

});