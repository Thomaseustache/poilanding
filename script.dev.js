var autoSlide;

$(function() {

	headerScroll();

	$(document).scroll(headerScroll);

	$('.trigger-menu').click(function(){
		$('.trigger-menu').toggleClass('open');
		$('.nav').toggleClass('open');
	});

	contentNav();
	autoSlideInit();

	$('header .nav a').click(function(){
		hash = $(this).attr('href');
		console.log(hash);
		if( $(hash).length ){
			$('html,body').stop().animate({scrollTop:$(hash).offset().top}, 500);
			return false;
		}
	});

	$('.section6 a').click(function(){
		modalId = $(this).attr('href');
		oTop = $(document).scrollTop();
		$(modalId).css({'top': oTop});
		$('.overlay-modal').show();
		$(modalId).fadeIn(300);
		return false;
	});
	$('.modal .close, .overlay-modal').click(function(){
		$('.modal').fadeOut(200);
		$('.overlay-modal').hide();
		return false;
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

		window.clearTimeout(autoSlide);
		autoSlideInit();
		return false;
	});


	

}

function autoSlideInit(){
	console.log('AUTO');
	autoSlide = window.setTimeout(function(){
		active = $('.section4 .nav-items li.active')
		if(active.next().length){
			active.next().click();
		}else{
			$('.section4 .nav-items li').first().click();
		}
	},14000);
}