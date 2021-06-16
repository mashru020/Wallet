"use strict";
$(window).on("load", function() {
	$(".loader-box").fadeOut("slow");
});
$(document).ready(function() {
  	var $videoSrc;  
  	$(document).on('click', '.video-button button.icon', function() {
    	$videoSrc = $(this).data( "src" );
  	});
  	$('#about-video-modal').on('shown.bs.modal', function (e) {
 		$("#about-video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  	})
  	$('#about-video-modal').on('hide.bs.modal', function (e) {
	    $("#about-video").attr('src',$videoSrc); 
	 }); 

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});
	$(document).on('hover', '.header-buttons .button1', function() {
			$(this).addClass('hover');
	   		$(".header-buttons .button2").removeClass('hover');
	});
	$(document).on('hover', '.header-buttons .button2', function() {
	   		$(this).addClass('hover');
	   		$(".header-buttons .button1").removeClass('hover');
	});
	$(document).on('hover', '.app-link .app-store', function() {
		$(this).addClass('hover');
		$('.app-link .play-store').removeClass('hover');
	});
	$(document).on('hover', '.app-link .play-store', function() {
		$(this).addClass('hover');
		$('.app-link .app-store').removeClass('hover');
	});
});



