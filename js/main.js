$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    var headerHeight = $("nav").height() + 5;
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    $("a.active").removeClass("active");
    $(this).addClass("active");
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - headerHeight
      }, 1000);
      return false;
    }
  }
}); 


$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

function successMessage() {
	document.getElementById("successmsg").innerHTML = "Your message has been sent. Thank you for your feedback!";
	setTimeout(function(){
		document.getElementById("successmsg").innerHTML = "";
	}, 2000);
	$("#successmsg").css("transform","scale(1.5, 1.5)");
}

$('form').on('submit',function(e) {
      e.preventDefault();
      $.post( '', $('form').serialize(), function( data ) {
           alert( data ); 
      } );
});
