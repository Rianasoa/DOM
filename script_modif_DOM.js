function changeTitle(){
	let title = document.getElementsByTagName('h1')[0];
	title.innerHTML = "Ce que j'ai appris à THP";
	let section = document.getElementsByClassName('lead text-muted')[0];
	section.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}


changeTitle();

function changeCallToAction(){
	let button = document.querySelectorAll('a.btn-primary.my-2')[0];
	button.textContent = "OK je veux tester !";
	button.setAttribute('href', "http://www.thehackingproject.org");

	let button2 = document.querySelectorAll('a.btn-secondary.my-2')[0];
	button2.textContent = "Non Merci";
	button2.setAttribute('href', "https://www.pole-emploi.fr/accueil/");

}

changeCallToAction();

function changeLogoName(){
	let nav = document.querySelectorAll('a.navbar-brand')[0];
	nav.innerHTML = "The THP Experience";
	nav.style.fontSize= "2em";

}
changeLogoName();

function populateImages(){
	let images = document.querySelectorAll('img.card-img-top');
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	for (let i in images){
		images[i].src = imagesArray[i];
	}

}
populateImages();

function deleteLastCards(){
	let im = document.querySelectorAll('div.album.py-5.bg-light div.container div.row div.col-md-4');
	for (let i = 0; i < im.length; i++) {
		if (i >= (im.length - 3)) {
			im[i].remove();
		}
	}
}
deleteLastCards();

function changeCardsText(){
	let paraArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
	let para = document.querySelectorAll("div.container div.row div.col-md-4 div.card.mb-4.box-shadow div.card-body p.card-text");

	for(let i in para){
		if(i < 3){
			para[i].textContent = paraArray[i];
		}
	}


}
changeCardsText();

function  changeViewButtons(){
	buttons = document.querySelectorAll("div.btn-group button.btn.btn-sm.btn-outline-secondary:nth-of-type(1)");
	for(let i=0; i<buttons.length;i++){
		buttons[i].classList.remove('btn-outline-secondary');
		buttons[i].classList.add('btn-success');
	}
}
changeViewButtons();

function addDiv(){
	let container = document.querySelectorAll('.album .container');
	let div = document.createElement('div');
	let row = div.classList.add('row');
	container.appendChild(div);

	let deplaceCard = document.querySelectorAll('div.album.py-5.bg-light div.container div.row div.col-md-4');
	let card = deplaceCard[2];
	row.appendChild(card);
}
addDiv();