$(document).foundation();

var wrapper = $('.wrappper'),docheight = $(document).height();
	
wrapper.height = docheight;


 // Accordion animation
$(".accordion").on("click", "dd", function () {
 	$("div.active").stop().slideUp("normal");
 	$(this).find(".content").stop().slideToggle("normal");
 });

