//access a un element unique: le premier element trouvé
//var a = document.querySelector("#myElement");
//var a = document.querySelector(".myClass");//

//var select = document.querySelectorAll("div.note, div.alert, ...");

//access a plusieurs élement []
//document.querySelectorAll("p")

//document.getElementsByTagName(balise)
/*
var d = document;

d.getElementById("");
d.getElementsByClassName();


var img = document.querySelector("#img1");


var elements = document.getElementsByName("ImageJava");

//console.log(elements);

elements = document.querySelectorAll('img');

console.log(elements[0] === img);

//acess aux enfants d'un element
element.chilNodes;

//access au parent de l'element
element.parentNode;


//Manipulation des attributs

//access a l'atribut d'un element
element.getAttribute("attribute");

element.getAttribute('src');//test.webp


//modifier attribut element
element.setAttribute("attribute", "value");


var contenuAtt = img.getAttribute("id");


img.setAttribute("id", "javaimg");



//recuperer tout les enfants d'un element : element.childNodes;

var containers = document.querySelector(".container");
containers.childNodes;


//recuperation du parent d'un element
var col1 = document.querySelector('.col1');
col1.parentNode;


var menu = document.querySelector('.item')
menu.setAttribute("class", "active");*/

/* 
var intro = document.querySelector('p');

var text = intro.firstChild;
text.nodeValue = "Javacript est tres facile";

console.log(text);



//créer un élement html depuis javascript
var e = document.createElement('p');

e.style.width = "100px";
e.style.height = "100px";
e.style.backgroundColor = "red";
//intro.appendChild(e);



var nav = document.querySelector('nav');
nav.parentNode.removeChild(nav);


//insere avant un autre element
//element.parentNode.insertBefore(e, element);
intro.parentNode.insertBefore(e, intro);
intro.style.textAlign = "center";
 */
/* 
//ajout d'un contenu dans un element
var p = document.querySelector("p");
//p.textContent = "Hello World"; 

//ajout d'element dans le dom
p.innerHTML = "<strong> Hello world !</strong> <h1> innerHTML</h1>"


//ajout des classe a un element du DOM
var div = document.querySelector("div");
div.classList.add("red", "border");

//retirer une classe
div.classList.remove("active");

var hasClass = div.classList.contains('contento');

console.log(hasClass);

//basculer une classe
div.classList.toggle("desactive");

//compter les classes


var numClass = div.classList.length;

console.log(numClass);


//acceder a une classe spécifique
var classAtIndex = div.classList.item(1);
console.log(classAtIndex);

//remplacer une classe par une  autre
div.classList.replace('red', 'active');

div.style.color = "skyblue";
div.style.fontFamily = "Calibri";
div.style.border = "5px solid red";
div.style.textTransform = "uppercase";
div.style.width = "250px";
div.style.fontWeight = "800";
 */
/* revision
var monElement = document.getElementById('monElement');

console.log(monElement.textContent);

monElement.textContent = 'Nouveau contenu'

var nouveauTexte = document.createTextNode('Texte Nouveau');

monElement.appendChild(nouveauTexte);

let  parent = document.getElementById('monElement');

let enfant1 = document.createElement('div');
let enfant2 = document.createElement('span');

parent.append(enfant1, enfant2, 'Texte ajouté');
 */

//-----------------------------
/*LES EVENEMENTS EN JAVASCRIPT*/

/* let button = document.querySelector("#myButton");

button.addEventListener("", function(){
    alert("click sur le boutton !");
}); */

/**
 *
 * onchange
 * onsubmit
 * onreset
 * onselect
 * onblur
 * onfocus
 *
 * onkeydown
 * onkeypress
 * onkeyup
 *
 * onclick
 * ondbclick
 * onmousedown
 * onmousemove
 * onmouseout
 * onmouseover
 * onmouseup
 *
 */

/* function validerLeFormulaire() {
    var nom = document.forms["monFormulaire"]["nom"].value;

    if(nom == null || nom == "") {
        alert("Le nom doit etre spécifié");
        return false;
    }

}  */

//----------------
/* l'objet Event */

//un objet en javascript:
//littéral d'objet
/* let personne = {
    nom: 'Lurant',
    age: 30,
    adresse: {
        rue: '123 avenue principale',
        ville: 'Paris'

    },
};


//notation poité
let person =  {};
person.nom = "camel";
person.age = 40;
 */

/* element.addEventListener('click', function(event) {
    alert(event);
}); */

//------------------------
//Les objets en Javascript
/*var texte = "Bonjour c'est moi;";

document.write(texte.length);*/

//syntaxe
/*nomDeLobjet.nomDeLPropriété
nomDeLobjet[nomDeLPropriété]*/
/*
var monAuto = new Object();

monAuto.marque = "Renault";
monAuto["modele"] = "R5";

document.write(monAuto["marque"] + "<br />");
document.write(monAuto.modele + "<br />");
*/

/*parcour des propriétés d'un objet
for(variable in object){
    //instructions
}*/
/*
let property;
document.write("Propriétés de l'objet navigator");

for (property in navigator) {
  document.write(property);
  document.write("<br />");
}

document.write("Fin de boucle");
*/

//une autre methode pour créer les objets
var vin = {
  marque: "Saint Estèphe",
  annee: "2",
  prix: 14,
};

//vin = montant;

//Création d'un objet constructeur
function Vin(marque, annee, prix) {
  this.marque = marque;
  this.annee = annee;
  this.prix = prix;
  this.quantite = 1;
  this.montant = function () {
    return this.quantite * this.prix;
  };
}

var vin1 = new Vin("Saint 1", 1698, 80);
var vin2 = new Vin("Saint 2", 1920, 41);
var vin3 = new Vin("Saint Estèphe", 1920, 10);

vin1.quantite += 5;
//document.write(vin1.montant());

/**
 * 
 * les objets natif en javascript
    String et RegExp
    Number et Math
    Boolean
    Array
 */

//initialisation d'un tableau vide
var monTableau = new Array();
var langage = new Array("php", "java", "sql");

var php = langage[0];
//document.write(langage.length);
langage[2] = "Js";

var tab1 = new Array("Pomme", "Poires", "Cerise", "Ananas");
var tab2 = new Array("Banane", "Mangue");

var fruits = tab1.concat(tab2);
//fruits = ["Pomme", "Poires", "Cerise", "Ananas", "Banane", "Mangue"]
//document.write(fruits);

fruits.forEach(function (fruit, index) {
  console.log("Index " + index + ": " + fruit);
});

//tableau vers string

let chaineString = fruits.join(" ");
//document.write(chaineString);

/*
pop()
push() 
reverse() 
shift() : supprime le premier élémént du tableau
slice()
sort()
unshift: insere les elements au debut du tableau
splice()
*/

let f1 = fruits.slice(2, 5);
document.write(f1);
