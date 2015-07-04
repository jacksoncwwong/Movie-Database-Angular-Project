function MovieListCtrl(movieService, $location) {
  this.movieService = movieService;
  this.movies = this.movieService.getMovies();
  this.location = $location;
  this.curPage = 0;
  this.moviesPerPage = 4;
  this.totalPages = Math.ceil(this.movies.length/this.moviesPerPage);

  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
}

MovieListCtrl.prototype.movieDetails = function movieDetails(movieId) {
	this.location.path('/movie/' + movieId);
}

angular.module('coderMdb').controller('MovieListCtrl', MovieListCtrl);