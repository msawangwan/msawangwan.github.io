// on page load
$(document).ready(function(){
	$('.nav-persistant-handle').on('click', function() {
		$('.nav-persistant ul').toggleClass('nav-persistant-animate');
	});
});
