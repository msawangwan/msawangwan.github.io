// on page load
$(document).ready(function(){
	$("").on({
		click: function(){ // see: mouseenter/mouseleave/hover as well
			$("").fadeIn();
		},
		hover: function(){
		}
	});
});

$(document).ready(function(){
	$(".nav-toggle").click(function(){
		$(".nav-menu").fadeToggle();
	});
});
