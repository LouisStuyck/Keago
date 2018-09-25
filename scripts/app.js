$(document).ready(function() {
	// On écoute le scroll sur la page
	$(document).scroll(function() {
		// On récupère la hauteur de la page // On récupère la position du scroll // On calcule l'endroit à partir duquel on veut faire apparaître le bouton
		let heightWindow = $(window).height(), scroll = $(window).scrollTop(), position = heightWindow - scroll, value = 100/scroll ;

        if (value > 0.25) { 
            $('#next').css("opacity", value);
        }
        else {
            // On fait disparaitre le bloc en fondu
            $('#next').fadeOut(1000);
        }
        if (position == heightWindow) { 
            $('#next').fadeIn(1000);
        }
        
	});
});