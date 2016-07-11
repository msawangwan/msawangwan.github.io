// on page load
$(document).ready(function(){
	$('.l-nav-handle').on('click', function() {
		$('nav ul').toggleClass('l-nav-handle-toggle');
	});
});

$(document).ready(function(){ // replcae this with animate (using queue)
	$(".nav-toggle").click(function(){
		$(".nav-menu").fadeToggle();
	});
});
