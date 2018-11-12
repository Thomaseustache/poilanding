$(function() {

	headerScroll();

	$(document).scroll(headerScroll);

	$('.trigger-menu').click(function(){
		$('.trigger-menu').toggleClass('open');
		$('.nav').toggleClass('open');
	});

	contentNav();

	$('header .nav a').click(function(){
		hash = $(this).attr('href');
		console.log(hash);
		if( $(hash).length ){
			$('html,body').stop().animate({scrollTop:$(hash).offset().top}, 500);
			return false;
		}
	});

});

function headerScroll(){
	scrollTop = $(document).scrollTop();
	if(scrollTop>10){
		$('header').addClass('scrolled');
	}else{
		$('header').removeClass('scrolled');
	}
}


function contentNav(){
	contents = $('.section4 .content-items .content');
	navItems = $('.section4 .nav-items li');

	contents.hide();
	contents.first().show().addClass('active');
	navItems.first().addClass('active');

	navItems.click(function(){
		ind = $(this).index();

		contents.hide().removeClass('active');
		contents.eq(ind).show().addClass('active');
		navItems.removeClass('active');
		navItems.eq(ind).addClass('active');

		return false;
	});

}