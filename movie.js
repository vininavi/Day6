class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
  }
}

        const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
        const movie2 = new Movie( "Avengers","Marvel","PG");
        const movie3 = new Movie("JO", "AVM", "PG");
        const movie4 = new Movie("Varisu", "TBrothers", "PG");
            
const movies = [movie1, movie2, movie3];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
