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

let button = document.querySelector("#myButton");

button.addEventListener("", function(){
    alert("click sur le boutton !");
});


/**
 * 
 * click
 * load
 * unload
 * 
 * 
 */










































