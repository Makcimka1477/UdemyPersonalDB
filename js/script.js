"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function(callback) {
        while (personalMovieDB.count === 0) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
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

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            while (!personalMovieDB.genres[i - 1]) {
                console.log(`Вы ввели некорректные данные, ответьте на вопрос еще раз!`);
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
         
        //  Через метод sort() и split();
        // for (let i = 1; i < 2; i++){
            // let genres = prompt('Введите ваши любимые жанры через запятую!');
            
            // if (!genres || genres.indexOf(',') === -1) {
            //         console.log(`Вы ввели некорректные данные, ответьте на вопрос еще раз!`);
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();    
            // }
        // }



        }
            personalMovieDB.genres.forEach(function(element, num , array){
                console.log(`Любимый жанр #${num + 1} - это ${element}`);
            });
        }
    };