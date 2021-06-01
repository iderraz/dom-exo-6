// // # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
let enfant1 = document.getElementsByTagName("h3")[0];
console.log(enfant1);
// ### 2. Affiche le titreNiv3
let titreu = document.getElementsByTagName("h3")[1];
console.log(titreu);
// ### 3. Affiche l'élément qui précède le titreNiv3
let citron = document.getElementsByTagName("h3")[1].previousElementSibling;
console.log(citron);
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let petitPNext = document.getElementsByTagName("p")[1].nextElementSibling;
console.log(petitPNext);
// ### 5. Affiche le parent des éléments ayant comme class "important" 

// let parentDuLi = document.getElementsByClassName("important")[0].parentElement;
// console.log(parentDuLi);

let tabImportant = Array.from(document.querySelectorAll("important"));
tabImportant.forEach(element => {
    console.log(element.parentElement);
});

// Grâce au forEach, on va faire prendre le parent de chaque element

// ### 6. Affiche le premier enfant, du parent de "listElements"
let firstEnfant = document.getElementById("listElements").firstElementChild;
console.log(firstEnfant);
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let nextClass = document.getElementsByClassName("important")[3].nextElementSibling;
console.log(nextClass);
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 

let textGeneral = document.getElementById("textGeneral").nextElementSibling.nextElementSibling;
console.log(textGeneral);
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let prenom = document.getElementsByTagName("span")[1].parentNode.nextElementSibling;
console.log(prenom);

// ### 10. En partant de Nicolas, affiche Primo
let nico = document.getElementsByTagName("b")[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
console.log(nico);
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let mou = document.querySelector(".grandParagraphe");
console.log(mou);
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle
let hbn = Array.from(document.querySelectorAll("li"));
console.log(hbn);
hbn.forEach(element => {
    console.log(element);
});