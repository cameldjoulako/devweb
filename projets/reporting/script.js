const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const text = document.getElementById("description");

//exemple
/* const listing = [
  { id: 1, text: "achat pain", amount: -10 },
  { id: 2, text: "salaire", amount: 3500 },
  { id: 3, text: "livre", amount: -30 },
  { id: 4, text: "vente service", amount: 1000 },
]; */

/* const transaction1 = { "id": 1, "text": "achat pain", "amount": -10 };
const tr = JSON.parse(transaction1);
let montant = tr.amount; */

/**
 
recuperer le montnt
recuperer le text de description

tester les champs

construire un objet avec les champs

ajouter l'objet(transaction) a notre base de donnée locale

Ajouter la transaction dans le DOM

mISE A JOUR des valeurs

Mise a jour de notre base de donnée locale

renitialisé les champs du formulaire

 */

/* localStorage et sessionStorage // cle:valeur :// nom:camel
 */

//enregistrement
/* localStorage.setItem("transactions", [...]);

alert(localStorage.getItem("nom")); */

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

//Ajout d'une transaction
function Addtransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Ajouter un montant et une description");
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

    console.log(transaction);
  }
}

function generateID() {
  let id = Math.floor(Math.random() * 100000000);
  return id;
}

form.addEventListener("submit", Addtransaction);
