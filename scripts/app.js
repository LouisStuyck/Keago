$(document).ready(function() {
	// On écoute le scroll sur la page
	$(document).scroll(function() {
		// On récupère la hauteur de la page // On récupère la position du scroll // On calcule l'endroit à partir duquel on veut faire apparaître le bouton
		let heightWindow = $(window).height(), scroll = $(window).scrollTop(), position = heightWindow - scroll;

		if (position > 0) {
			// On fait apparaître le bloc en fondu
			$('#next').fadeIn(2000);
		} else {
			// On fait disparaitre le bloc en fondu
			$('#next').fadeOut(500);
		}
	});
});