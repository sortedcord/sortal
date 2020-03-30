$( document ).ready(function() {
	
	// Loop through each nav item
	$('nav.navbar').children('ul.nav').children('li').each(function(indexCount){
		
		// loop through each dropdown, count children and apply a animation delay based on their index value
		$(this).children('ul.dropdown').children('li').each(function(index){
			
			// Turn the index value into a reasonable animation delay
			var delay = 0.1 + index*0.03;
			
			// Apply the animation delay
			$(this).css("animation-delay", delay + "s")			
		});
	});
});