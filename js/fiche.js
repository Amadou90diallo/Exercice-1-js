



function TextToEdit() {

	let ma_chaine = document.getElementById("text_to_edit").textContent;
	if (ma_chaine == ma_chaine.toLowerCase()) {
		document.getElementById("text_to_edit").innerHTML = "CLIQUEZ ICI POUR MODIFIER LE TEXTE";
	}
	else{
		document.getElementById("text_to_edit").innerHTML = "cliquez ici pour modifier le texte";
	}
}