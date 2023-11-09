//1st question
class Movie {
    constructor(title, studio, rating) {
      this.title = title
      this.studio = studio
      this.rating = rating
    }
  
    getrating() {
      return this.rating
    }
    
//2nd question
getpg() {
    if (this.rating === "" || this.rating === undefined) {
      return console.log("PG");
    } else {
      return console.log(this.rating);
    }
  }

    //3rd question
    getPG(movieArray) {
        return movieArray.filter(movie => movie.rating.includes("PG"));
      }
  }
  

const moviesArray = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "PG"),
];
  
  //4th question
  const Movie1 = new Movie("Casino Royale", "Eon Productions","PG-13")
  
  console.log(Movie1)
  
  const movieInstance = new Movie();
const pgMoviesArray = movieInstance.getPG(moviesArray);
console.log(pgMoviesArray); 
