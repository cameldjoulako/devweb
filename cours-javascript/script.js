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



var intro = document.querySelector('p');

var text = intro.firstChild;
text.nodeValue = "Javacript est tres facile";

console.log(text);



//créer un élement html depuis javascript
var e = document.createElement('p');

intro.appendChild(e);

intro.style.textAlign = "center";

var nav = document.querySelector('nav');
nav.parentNode.removeChild(nav);



























