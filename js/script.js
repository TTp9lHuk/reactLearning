"use strict";

let numbetOfFilms,
    lastSeeMovie1,
    ratingFilm1,
    lastSeeMovie2,
    ratingFilm2;

numbetOfFilms = prompt('Сколько фильмов смотрел?','');

let personalMovieDB = {
    count: numbetOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

lastSeeMovie1 = prompt('Один из последних фильмов?','');
ratingFilm1 = prompt('Насколько оцените его?','');
lastSeeMovie2 = prompt('Один из последних фильмов?','');
ratingFilm2 = prompt('Насколько оцените его?','');

personalMovieDB.movies[lastSeeMovie1] = ratingFilm1;
personalMovieDB.movies[lastSeeMovie2] = ratingFilm2;

console.log(personalMovieDB.movies);