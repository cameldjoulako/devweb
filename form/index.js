/* let form = document.getElementById("new-article-form");*/

//console.log(form);

//document.write(form);

//let art = form.elements.article;

//document.write(art);

//let article = document.getElementsByName("article")[0];

//console.log(article);

/* let article = form.elements.article.value;
let signature = form.elements.signature.value;

let work = form.elements.work.selectedIndex; */

//console.log(form.js.checked);

/*
let etats = form.etat;
console.log(etats[0].checked);

form.addEventListener("click", function (event) {
  event.preventDefault();
}); */

(function () {
  var validation = {
    init: function () {
      window.addEventListener("load", function (event) {
        var form = document.getElementById("new-article-form");
        form.addEventListener("submit", function (event) {
          var form = event.target;
          console.debug("submit");

          if (!form.article.value.trim()) {
            alert(" l'article ne peut être vide");
            event.preventDefault();
            return;
          }

          if (!form.signature.value.trim()) {
            alert(" la signature ne peut être vide");
            form.signature.focus();
            event.preventDefault();
            return;
          }

          if (!form.work.value.trim()) {
            alert(" la qualité ne peut être vide");
            event.preventDefault();
            return;
          }

          var categories = ["js", "css", "c"];
          var hasCategory = false;

          for (let category = 0; category < categories.length; category++) {
            if (form[categories[category]].checked) {
              hasCategory = true;
              break;
            }
          }

          if (!hasCategory) {
            alert("Choisir une categorie");
            event.preventDefault();
            return;
          }

          var etat;
          for (let i = 0; i < form.etat.length; i++) {
            if (form.etat[i].checked) {
              etat = form.etat[i].value;
            }
          }

          if (!etat) {
            alert("Choisir un etat");
            event.preventDefault();
            return;
          }

          //form.submit();
        });
      });
    },
  };

  validation.init();
})();
