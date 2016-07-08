// on page load
$(document).ready(function(){
	$(".nav-toggle").on({
		click: function(){ // see: mouseenter/mouseleave/hover as well
			// toggle nav menu
			$(".nav-menu").fadeIn();
		},
		hover: function(){
			// toggle nav menu
		}
	});
});
