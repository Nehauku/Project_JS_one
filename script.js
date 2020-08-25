"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const answers = [];
answers[0] = prompt('Один из последних просмотренных фильмов?', '');
answers[1] = +prompt('На сколько оцените его?', '');

let answer = answers[0],
	ratting = answers[1];

personalMovieDB.movies = `${answer}: ${ratting}`;

console.log(personalMovieDB);