// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = array => {
  const allDierctors = array.map(function (value) {
    return value.director;
  });

  return allDierctors;
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = array => {
  const movies = array
    .filter(value => {
      return value.genre.includes('Drama');
    })
    .filter(value => value.director === 'Steven Spielberg');

  return movies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = array => {
  if (array.length === 0) {
    return 0;
  } else {
    const sumOfRates = array
      .filter(value => {
        return value.rate >= 0;
      })
      .reduce((accumulator, value) => {
        let currentSum = accumulator + value.rate;
        return currentSum;
      }, 0);

    const roundedRate = Math.round((sumOfRates / array.length) * 100) / 100;

    return roundedRate;
  }
};
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {
  const dramaMovies = array.filter(value => {
    return value.genre.includes('Drama') && value.rate >= 0;
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const dramaMoviesRateSum = dramaMovies.reduce((accu, val) => {
    return accu + val.rate;
  }, 0);

  const roundedRate =
    Math.round((dramaMoviesRateSum / dramaMovies.length) * 100) / 100;
  return roundedRate;
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = array => {
  const newArray = [...array];
  newArray.sort((a, b) => {
    if (a.year - b.year !== 0) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return newArray;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
  const arrayOfTitles = array.map(value => {
    return value.title;
  });

  arrayOfTitles.sort((a, b) => {
    return a.localeCompare(b);
  });

  const finalArray = [];

  if (arrayOfTitles.length <= 20) {
    for (let i = 0; i < arrayOfTitles.length; i++) {
      finalArray.push(arrayOfTitles[i]);
    }
  } else {
    for (let i = 0; i < 20; i++) {
      finalArray.push(arrayOfTitles[i]);
    }
  }

  console.log(finalArray);
  return finalArray;
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
