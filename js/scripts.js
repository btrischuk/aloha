$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
});


// $('#subscribe-button').on('submit', function(event) {
//   event.preventDefault();
//   if ( $('#my-text-input').val() == '' ) {
//      alert('You missed the field.');
//   } else {
//      alert('Thanks for filling the field!');
//   }
// });




$("#subscribe-button").click(function() {

  var y = $("#subscribe-email").val();
  
  if (y.includes("@")) {
        alert ("Thanks for subscribing " + y + "!");
  }
  else
    { alert ( y  + " is an invalid email");
  }
          
          

    });

    
    // $("#subscribe-button").click(function() {
      

//   if (y.includes("@")) {
//     if (y.includes(".")) {
//       var y = $("#subscribe-email").val();
//       var x;
//       for (var i=0; i< y.length(); i++) {
//     if (y.charAt(i) === "@") {
//       if (x.length() <1) {
//         alert ( y  + " is an invalid email");
//       } else {
//         x= "";
//         continue;
//       }
//     }
//     x += i;
//   } else alert ( y  + " is an invalid email");
// } else alert ( y  + " is an invalid email");
//     alert ("thanks for subscribing " + y + "!");
//           } 
          

//     });




    //       else (alert) "invalid email address"
    
// var y = $("#subscribe-email").val();
// alert ("thanks for subscribing " + y + "!");




// function ValidateEmail(email) {
//   var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//   return expr.test(email);
// };
// $("#demo").live("click", function () {
//   if (!ValidateEmail($("#txtEmail").val())) {
//       alert("Invalid email address.");
//   }
//   else {
//       alert("Thanks for subscribing");
//   }
// });

// https://www.aspsnippets.com/Articles/Email-address-validation-in-jQuery-using-Regular-Expressions.aspx


// if (address.contains("@")) { 
// } 

// $(function() {
  
//     $('button').on('click', function(event){

//       if (address.contains("@")) { 
//         alert thanks for subscribing
//       } 

//       else (alert) "invalid email address"

//     });