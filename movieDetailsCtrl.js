function MovieDetailsCtrl($routeParams, $location, movieService) {
  this.routeParams = $routeParams;
  this.movieId = this.routeParams.movieId;
  this.location = $location;
  this.movie = movieService.getMovie(this.movieId);
  console.log(this.movie);
}

MovieDetailsCtrl.prototype.back = function back() {
	this.location.path('/home');
}

angular.module('coderMdb').controller('MovieDetailsCtrl', MovieDetailsCtrl);