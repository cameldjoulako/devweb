/* let promise = new Promise(function (resolve, reject) {
  //l'exécuteur
});
/* 
etat (state): pending, fulfilled, 
result: undifined se change en value resolve(value) : rejet(error)


*/

// resolve(value)

//rejet(error) */

/* function bonjour() {
    console.log("bonjour");
 } */

/* let promise = new Promise(function (resolve, reject) {
//traitement

  setTimeout(() => resolve("done"), 1000);
});

console.log(promise); */

//executeur qui rompe la promesse

/* let promise = new Promise(function (resolve, reject) {

    //traitement ok

  //signlalé apres 1seconde que la tache est terminé avec une erreur
  setTimeout(() => reject(new Error("une erreur a été produite")), 1000);
});

console.log(promise); */

//rejet et resolve
/* let promise = new Promise(function (resolve, reject) {
  //traitement ok
  resolve("done");

  //traitrement off
  reject(new Error("errreur 1..."));

  //signlalé apres 1seconde que la tache est terminé avec une erreur
  setTimeout(() => reject(new Error("une erreur a été produite")), 1000);
});

console.log(promise); */

/** CONSOMMATION D'UNE PROMESSE: .then, .catch,  */

/* promise.then(
  function (result) {
    // gère un resultat correct
  },
  function (error) {
    // gère une erreur
  }
);
 */

/* let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Donne"), 1000);
}); */

//cas du reject
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("une erreur e'est produite")), 1000);
});

promise.then(
  (result) => alert(result),
  (error) => alert(error)
);

//promise.then(null, fonctionGerantErreur)
