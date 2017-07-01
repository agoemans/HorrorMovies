var movieService = angular.module('MovieService', []);
movieService.factory('MovieDataOp', function () {
    return {
        getMovies: function(){
            return movieCreator.create();
        }
    }

});