// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(100).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/cyberpunk-urban-scenery_23-2150712464.avif", 
	 		 "images/HD-wallpaper-artistic-city-neon-cyberpunk.jpg",
			 "images/retro-vaporwave-background-cyberpunk-laser-grid-vector-29098349.jpg"
	 			], 	{duration: 3600, fade: 1500});
		});
})