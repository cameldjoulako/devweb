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

ajouter l'objet(transaction) a notre base de donnée locale [{}, {}, ....]

Ajouter la transaction dans le DOM

mISE A JOUR des valeurs

Mise a jour de notre base de donnée locale

renitialisé les champs du formulaire

 */

/* localStorage et sessionStorage // cle:valeur :// nom:camel
 */

//enregistrement
/* localStorage.setItem("transactions", [...]);

alert(localStorage.getItem("nom")); */ /* [
  [{}],
  [{ commande1 }, [{ transaction }]],
]; */

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

    transactions.push(transaction);

    //ajout de la transaction dans le DOM
    addTransactioDOM(transaction);

    //Mise a jour du solde, entrée, dépense
    updateValues();

    //persistance de la transaction ajouté en base de données locale
    updateLocalStorage();

    text.value = "";
    amount.value = "";
  }
}

function generateID() {
  let id = Math.floor(Math.random() * 100000000);
  return id;
}

function addTransactioDOM(transaction) {
  //recupperer le type de transaction
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  //ajout d'une classe en fonction de la valeur
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.text}  <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">X</button>
  `;

  list.appendChild(item);
}

function removeTransaction(id) {
  //suppression d'une transaction

  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}

//Mise a jour du solde, entrée, dépense
function updateValues() {
  /* let transactions = [
    { 1, salaire, 2000 },
    { 2, text, 10 },//p
    { 3, text, -25 },
    { 4, text, 25 },/p
  ]; */

  const amounts = transactions.map((transaction) => transaction.amount);
  //amounts = [2000, 10, -25, 25];

  /* let nombres = [1, 2, 3, 4, 5];
  let somme = nombres.reduce(function (total, nombre) {
    return total + nombre;
  }, 0); */
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  //calcul des entrées
  const income = amounts
    .filter((item) => item > 0) //tableau avec les montant positif
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0) //tableau avec les montant négatif
      .reduce((acc, item) => (acc += item), 0) * (-1).toFixed(2);

  balance.innerHTML = `$${total} `;
  money_plus.innerHTML = `$${income} `;
  money_minus.innerHTML = `$${expense} `;
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

//Initialisation de l'application
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactioDOM);

  updateValues();
}

init();

form.addEventListener("submit", Addtransaction);
