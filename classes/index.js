/* class MyClass {
  //les méthodes de la classe
  constructor() {}

  methode1() {}
}

new MyClass() */

/* class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    alert(this.name);
  }

  profile() {}
}

//création d'un user
let user = new User("Camel");
//user.sayHello();

alert(typeof User); */
/* 
function User(name) {
  this.name = name;
}

User.prototype.SeyName = function () {
  alert(this.name);
};

let user = new User("Medina");
user.SeyName(); */

// let User = class MaClass {
//   sayHello() {
//     //alert('Bonjour !');
//     alert(MaClass);
//   }
// };

// //new User().sayHello(); //
// alert(MaClass);

/* function makeClass(text) {
  return class {
    sayHello() {
      alert(text);
    }
  };
}
 */
//creation
//let User = makeClass('bonjour');

/* class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Le nom est trop court");
      return;
    } else {
      this._name = value;
    }
  }
}

let user = new User("Camel");
alert(user);

user = new User(""); */

class User {
  name = "Medina";

  sayHello() {
    alert(`Bonjour, ${this.name}!`);
  }
}

new User().sayHello();

/* LES NOTIONS A APPRENDRE

Modules : 
Cookies
LocalStorage, sessionStorage
indexedDB
Expressions Régulière
Service Worker
FormData :  envoi des données d'un formulaire via fetch ou ajax
Mode strict : "use strict";

*/
