$(document).ready(function() {
  $('.navbtn').click(function() {
    $('.nav-display').slideToggle(500);
  });
  
  $(window).resize(function() {		
		if (  $(window).width() > 992 ) {			
			$('.nav-display').removeAttr('style');
		 }
	});
  $('.popup, .popup2').magnificPopup();
});