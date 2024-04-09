//let promise = fetch(url, [option]);

//let promesse = fetch("https://homedeve.com");//HTTP
//Response (status, ok: 200-299)

//let url = "https://homedeve.com";

/* let response = await fetch(`https://api.github.com/users${user}`); //obet de type Promise<Response>

console.log(response);

if (response.ok) {
  //si le HTTP-status est 200-299
  let data = await response.json();
  console.log(data);
} else {
  alert("http-Error: " + response.status);
}

//Obtenir le corp de la reponse
response.text(); // réponse sous forme de texte
response.json(); // analyse la reponse en json
response.formData(); // retourne la reponse en tant que objet FormData
response.body(); */

let user = {
  name: "camel",
  email: "came.djoulako@homedeve.com",
};
let nom = "Camel";
let response = fetch("monolio/files/save", {
  method: "POST",
  headers: {
    "Content-type": "text/plain;charset=utf-8",
    Authentication: "secretcode",
  },
  body: JSON.stringify(user),
});

let result = await response.json();
