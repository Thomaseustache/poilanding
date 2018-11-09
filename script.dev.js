$(function() {

	headerScroll();

	$(document).scroll(headerScroll);

	$('.trigger-menu').click(function(){
		$('.trigger-menu').toggleClass('open');
		$('.nav').toggleClass('open');
	})

});

function headerScroll(){
	scrollTop = $(document).scrollTop();
	if(scrollTop>10){
		$('header').addClass('scrolled');
	}else{
		$('header').removeClass('scrolled');
	}
}