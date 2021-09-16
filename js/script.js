"use strict";
let numberOfFilms;
 
// function start(callback) {
//     while (!numberOfFilms) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//     // callback();
//     return numberOfFilms;
// }


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function(callback) {
        while (!numberOfFilms) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },

    rememberMyFilms: function(num, callback) {
        for (let i = 0; i < num; i++) {
            let lastWatchedFilms;
            let filmRate;

            while (!lastWatchedFilms || !filmRate || filmRate > 10 || lastWatchedFilms.length > 50 ) {
                lastWatchedFilms = prompt('Один из последних просмотренных фильмов?', '');
                filmRate = +prompt('На сколько оцените его?', '');
            }
            personalMovieDB.movies[lastWatchedFilms] = filmRate;
        }
        // callback();
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно-таки мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);  
        } 
    },

    writeYourGenres: function() {
        let genre;
        for (let i = 0; i <= 2; i++) {
            genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);        
            while (!genre) {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);   
            }
        personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach(function(element, num , array){
            console.log(`Любимый жанр #${num + 1} - это ${element}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

};

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);

// writeYourGenres();
// console.log(personalMovieDB.genres);