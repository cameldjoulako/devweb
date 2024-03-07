//recuperation des elementsimportant du DOM
let btn = document.getElementById("btnSend");
let cityField = document.getElementById("city");
let response = document.getElementById("response");

//les options de la requete
let baseUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr";

let key = "2431cd209a6cd74511ca4e4a615c005c";

let xhr;

btn.addEventListener("click", handleClick, false);

function handleClick(e) {
  let city = cityField.value;

  //desactive le formulaire
  cityField.disabled = true;
  btn.disabled = true;

  //mise ajour de l'ui
  let img = `<img src="images/spinner.gif" alt="spinner" id="spinner" />`;
  updateUI(img);

  //lancement de la requette
  makeRequest(city); //pb
}

//methode de lancement de la requete
function makeRequest(city) {
  xhr = new XMLHttpRequest();

  xhr.open("GET", buildUrl(city));

  xhr.onreadystatechange = handleResponse;

  xhr.send();
}

function handleResponse() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      //la requette a été un sucess
      createSuccessHtml(JSON.parse(xhr.responseText));
    } else {
      //la requette a échoué
      createErrorHtml(JSON.parse(xhr.responseText));
    }
  }
}

function createSuccessHtml(data) {
  let weather = data.weather[0];

  let html = `
              <h1>Le temps à ${data.name} </h1>
              <p class="weatherMain">
                <img src="https://openweathermap.org/img/w/${
                  weather.icon
                }.png" alt="${weather.description}">
                <span>${weather.description}</span>
              </p>

              <p>
              Temperature: ${data.main.temp.toFixed(1)} °C
              </p>

             `;

  updateUI(html);
}

let createErrorHtml = (data) => {
  let html = `
              <h1>Une erreur s'est produite</h1>
              <p>${data.message}</p>
            `;
};

let buildUrl = (city) => {
  `${baseUrl}&q=${encodeURIComponent(city)}&appid=${key}`;
};

let updateUI = (html) => {
  //vider le champ reponse
  response.innerHTML = "";

  response.insertAdjacentHTML("beforeend", html);

  //renitialisé le formulaire
  cityField.disabled = false;
  btn.disabled = false;
};
