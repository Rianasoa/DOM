//Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
let countP = document.getElementsByTagName('p');
console.log(countP.length);

//Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console
let searchIdElt = document.getElementById('coucou');
console.log(`Le contenu portant l'id coucou est : ${searchIdElt.innerText}`);

//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
let linkHrefElt = document.getElementsByTagName('a');
console.log(linkHrefElt[2].href);

//Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
let elementClassCompteMoi = document.getElementsByClassName('compte-moi');
console.log(`Eléments portent la classe compte-moi est : ${elementClassCompteMoi.length}`);

//Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
let compteMoiLi = document.querySelectorAll('li.compte-moi');
console.log("Eléments li portent classe compte-moi :" +compteMoiLi.length);

//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi
let liOrder = document.querySelectorAll('ol li.compte-moi');
console.log("éléments <li> et situés dans une liste ordonnée portent la classe compte-moi :" +liOrder.length);

//La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. 
let recup = document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0];
console.log(recup);
