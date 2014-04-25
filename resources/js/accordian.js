$(function(){
	$('.side_sub').hide();
	$('.side_sub').first().show().addClass("current_menu");

	$('.side-head').on('click',function(){
		$('.current_menu').removeClass('current_menu').hide("500");
		$(this).find('.side_sub').addClass("current_menu").show("500");
	});
	loadMap ();
});
