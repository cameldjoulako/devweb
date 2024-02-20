// objet XMLHttpRequest

console.log("Chargement ok");

//let objet = new XMLHttpRequest();

/*envoi d'une requette: open()  et send()

let xmlRequest = new XMLHttpRequest();

xmlRequest.open("GET", 'http://localhost/exemple1.php', true);
xmlRequest.send();

*/

/*passage de parametre a une requette : GET
let xmlRequest = new XMLHttpRequest();

xmlRequest.open(
  "GET",
  "http://localhost/exemple1.php?ecole=acadig&etudiant=true",
  true
);
xmlRequest.send();
*/

//passage de parametre a une requette : POST
/* let xmlRequest = new XMLHttpRequest();

xmlRequest.open("GET", "http://localhost/exemple1.php", true);
xmlRequest.setRequestHeader(
  "Content-type",
  "application/x-www-form-urlencoded; charset=utf-8"
  //application/json   - application/xml
);

/*valeur possible de readyState

0  UNSENT 
1  OPEN
2  HEADERS_RECEIVED
3  LOADING
4  DONE
*/

/* STATUS CODE http: status
CODE  MESSAGE
100 continue
200 OK
301 moved permanently
302 found
401 unauthorized 
403 forbidden
404 not found
500 internal server Error
*/

//xmlRequest.send("ecole=acadig&etudiant=true");

let xmlHttp = new XMLHttpRequest();

xmlHttp.open("GET", "htt://localhost/ajax/exemple1.php", true);

xmlHttp.setRequestHeader("Content-Type", "text/html");
xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xmlHttp.send();

console.log("ok");

//Ecoute de la réponse du serveur : onreadytatechange,  readyState, status, statusText
