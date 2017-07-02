var MovieService = angular.module('MovieService2', []);
MovieService.factory('MovieDataOp2', function () {
    return {
        getMovies: function(){
            return movieCreator.create();
        }
    }

});