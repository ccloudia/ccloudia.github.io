$(document).ready(function(){
	$('#mobile-menu-launch').click(function() {
	    $("nav.mobile").slideToggle();
	});

	$('nav.mobile').click(function() {
	    $(this).slide();
	});
	$('.close-icon').click(function() {
	    $('nav.mobile').slideUp();
	});

});