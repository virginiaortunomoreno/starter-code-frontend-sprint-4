
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result =  array.map(array => `${array.director}`); 
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter(mov => mov.director === director);
  console.log("EXERCISE 2 ->", result);
  return result;  
  }

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let scoreMoviesDirector = array.filter(mov => mov.director === director).map(filteredMov => filteredMov.score)
  let result = scoreMoviesDirector.reduce((a,b) => a + b);
  result = parseFloat((result/scoreMoviesDirector.length).toFixed(2));
  console.log("EXERCISE 3 ->", result);
  return result;
}

//Exercise 3: Moodle
function moviesAverage(array){
   
  let scoreM = array.filter(mov => mov.score != '').map(mov => mov.score);
  let result = scoreM.reduce((a, b) => a + b);
  result = parseFloat((result/scoreM.length).toFixed(2));
  console.log(result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let orderAlpha = [...array].sort((a, b) => a.title > b.title ? 1 : -1);
  let result = orderAlpha.slice(0,20).map(order => `${order.title}`);
  console.log("EXERCISE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let result = [...array].sort((a, b) => (a.year - b.year || a.title.localeCompare(b.title)));
  console.log("EXERCISE 5 ->", result);
  return result;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let categoryScore = array.filter((movie) => movie.genre.indexOf(genre) != -1);
  let result = moviesAverage(categoryScore);
  console.log("EXERCISE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
