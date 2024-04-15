const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-EN&page=1&api_key=07ddc8b397fa196c169df263d25a0d82";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=07ddc8b397fa196c169df263d25a0d82&query=";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//recuperation des films
getMovies(API_URL);

/**
 * Function de recuperation des films
 *
 * */
async function getMovies(url) {
  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  //afficher les différents fims
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");

    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span>${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `;

    main.appendChild(movieEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
