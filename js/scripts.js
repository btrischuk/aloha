$(document).ready(function() {

  // carousel
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
  });

  // email subscription
  $('#subscribe-button').on('click', function (e) {
    e.preventDefault();
    //reg exp from http://regexlib.com/REDetails.aspx?regexp_id=26
    var emailAddress = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (emailAddress.test($('#subscribe-email').val())) {
      $('#email-input').val("").attr("placeholder", "Thanks!");
      alert('Thank you for subscribing!');
    } else {
      $('#email-input').attr("placeholder", "Invalid Address");
      alert('Please enter valid email address');
    }
    $('#email-input').on('focus', function (event) {
      event.preventDefault();
      $('this').val('').attr('placeholder', 'Your Email');
    });
  });

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