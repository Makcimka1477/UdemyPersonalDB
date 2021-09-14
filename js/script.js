"use strict";



function start() {
    let numberOfFilms;
    while (!numberOfFilms) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    return numberOfFilms;
}

let number = start();


let personalMovieDB = {
    count: number,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let lastWatchedFilms;
        let filmRate;

        while (!lastWatchedFilms || !filmRate || filmRate > 10 || lastWatchedFilms.length > 50 ) {
            lastWatchedFilms = prompt('Один из последних просмотренных фильмов?', '');
            filmRate = +prompt('На сколько оцените его?', '');
        }
        personalMovieDB.movies[lastWatchedFilms] = filmRate;
    }
}
// rememberMyFilms();
console.log(personalMovieDB.movies);



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно-таки мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLevel();


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);  
    } 
}
showMyDB();


function writeYourGenres() {
    let genre;
    for (let i = 0; i <= 2; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);        
        while (!genre) {
            genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);   
        }
    personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();
console.log(personalMovieDB.genres);