// ========================== Menu Toggle JS ==========================
// Menu Js
$('ul.slimmenu').slimmenu({
    resizeWidth: '1024',
    collapserTitle: 'MENU',
    easingEffect:'easeInOutQuint',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});


$(document).ready(function () {
  $('.collapse-button').on('click', function () {
    $('body').toggleClass('body-fixed');
    $('.collapse-button').toggleClass('open');
    $('.slimmenu').toggleClass('show-nav');
  });
});



// Owl Carousel Js
$(document).ready(function () {
	$('#our_client_logo_scrl').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots:false,
		autoplay:true,
		smartSpeed:2000,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		singleItem: true,
		responsive:{
			0:{
			items:1
			},
			480:{
			items:2
			},
			767:{
			items:3
			},
			1024:{
			items:4
			}
		}
	});

});