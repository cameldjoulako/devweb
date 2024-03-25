//Méthode classique

/* function loadScript(src, callback) {
  let script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`Erreur de chargement du fichier: ${src}`));

  document.head.append(script);
} */

///Utilisation des promesse

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);

    script.onerror = () =>
      reject(new Error(`Erreur de chargement du fichier: ${src}`));

    document.head.append(script);
  });
}
const URL = "https://aazecdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js";
let promise = loadScript(URL);

promise.then(
  (script) => alert(`Le script: ${script.src} a été bien chargé`),
  (error) => alert(`Erreur: ${error.message}`)
);
