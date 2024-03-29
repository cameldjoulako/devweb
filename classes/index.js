/* class MyClass {
  //les méthodes de la classe
  constructor() {}

  methode1() {}
}

new MyClass() */

class User {
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

alert(typeof User);
