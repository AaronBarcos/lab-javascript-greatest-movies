// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let newArr = moviesArray.map((element) => {

        return element.director

    })

    return newArr;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let spielbergArr = moviesArray.filter((element) => {

        return element.director === "Steven Spielberg" && element.genre.includes("Drama") === true;

    })

    return spielbergArr.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }

    let total = moviesArray.reduce((acc, element) => {

        if (element.score !== undefined) {
            return acc + element.score;
        } else {
            return acc;
        }
        
    }, 0)

    let avg = total / moviesArray.length;
    let twoDigits = avg.toFixed(2);

    return Number(twoDigits);

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let arrDrama = moviesArray.filter((element) => {

        return element.genre.includes("Drama");

    })

    if (arrDrama.length === 0) {
        return 0;
    }

    let total = arrDrama.reduce((acc, element) => {

        if (element.score !== undefined) {
            return acc + element.score;
        } else {
            return acc;
        }
        
    }, 0)

    let avg = total / arrDrama.length;
    let twoDigits = avg.toFixed(2);

    return Number(twoDigits);



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let cloneArr = structuredClone(moviesArray);

    let sortArr = cloneArr.sort((elem2, elem1) => {

        if (elem2.year > elem1.year) {
            return 1;
        } else if (elem2.year < elem1.year) {
            return -1;
        } else if (elem1.year === elem2.year) {
             if (elem2.title.length > elem2.title.length) {
                return 1;
             } else {
                return -1;
             }
        }


    })

    return sortArr;


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let cloneArr = structuredClone(moviesArray);

    let titleArr = cloneArr.map((element) => {

        return element.title;

    })

    let sortTitleArr = titleArr.sort();

    return sortTitleArr.slice(0, 20);


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let newArr = moviesArray.map( (element) => {
        
        return element.duration 


    });

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
