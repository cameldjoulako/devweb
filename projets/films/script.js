const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr-FR&page=1&api_key=07ddc8b397fa196c169df263d25a0d82";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=07ddc8b397fa196c169df263d25a0d82&query=";

const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

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
}

fetch(url, {
  method: POST,
  headers: {
    "content-Type": "application/json, ", //multipart-form-data, text/plain, application/xml
  },
});

//utilisation du jeton pour authentifier
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2RkYzhiMzk3ZmExOTZjMTY5ZGYyNjNkMjVhMGQ4MiIsInN1YiI6IjY2MTAxMjhlZjI4ODM4MDE3ZTBmYjE5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EF6zxfMetjXcKLLbT70c1iTwcuWPoM36qTrO_vI0Bs4",
  },
};

const api_url2 =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
fetch(url, options);
