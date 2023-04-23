document.addEventListener ('DOMContentLoaded' ,  function() {

	// div contenant le jeu de taquin
	const taquin = document.getElementById('taquin');

	// tous les boutons du jeu
	const buttons = taquin.getElementsByTagName('button');

	// Nombre de ligne/colonne du jeu
	const tailleTaquin = Math.sqrt(buttons.length);

	// Initialise les valeurs de 'order'
	for(let i=0; i<buttons.length ; i++){
		let button = buttons.item(i);
		button.style.order = i+1;
	}


	// Fonction pour déplacer une case
	function deplace(btn, verifVictory) {
		// Coordonnées X,Y de la case libre
		const caseLibre = taquin.getElementsByClassName('empty')[0];
		const caseLibreX = Math.floor(caseLibre.offsetLeft / caseLibre.offsetWidth);
		const caseLibreY = Math.floor(caseLibre.offsetTop / caseLibre.offsetHeight);

		// Coordonnées X,Y de la case cliquée
		const caseX = Math.floor(btn.offsetLeft / btn.offsetWidth);
		const caseY = Math.floor(btn.offsetTop / btn.offsetHeight);

		// Vérifie si la case cliquée est adjacente à la case libre
		const isAdjacent = Math.abs(caseX - caseLibreX) + Math.abs(caseY - caseLibreY) === 1;
		if (!isAdjacent) {
			return; // La case cliquée n'est pas adjacente à la case libre, ne rien faire
		}

		// Échange la position de la case cliquée avec la case libre
		const tmp = btn.style.order;
		btn.style.order = caseLibre.style.order;
		caseLibre.style.order = tmp;

		if (verifVictory && verif()) {
			setTimeout(function() {
				alert('Bravo !!!');
			}, 300); // Délai avant affichage alert
		}
	}



	// Fonction pour mélanger le jeu de taquin
	function melange() {
		for (let i=0 ; i<1000 ; i++) {
			let indexAlea = randomInt(0, tailleTaquin*tailleTaquin-1);
			btn = buttons.item(indexAlea);
			deplace(btn, false);
		}
	}


	// Le clic sur le bouton mix démarre le mélange
	let mixBtn = document.getElementById('mix');
	mixBtn.addEventListener("click", melange);
	// Vérification victoire
	function verif(){
		let prevOrder = 0;
		for (let i = 0; i < buttons.length; i++) {
			const order = parseInt(buttons.item(i).style.order);
			if (order < prevOrder) {
				return false; // Le jeu n'est pas terminé car l'ordre n'est pas croissant
			}
			prevOrder = order;
		}
		return true; // Le jeu est terminé car l'ordre est croissant pour chaque bouton
	}


	// Click sur un bouton du jeu => deplace la piece
	for(let i=0; i<buttons.length ; i++){
		let button = buttons.item(i);
		button.onclick = function(){ 
			deplace(button, true);
		};
	}
	
});
