(function () {
    var posterApp = angular.module('posterApp', [])

        .service('movieService', function () {
            var promise = new Promise(function(resolve, reject){
                var movieList = movieCreator.create();
                if(movieList && movieList.length > 1){
                    resolve(movieList)
                } else {
                    reject(Error('There is no movie list, create one!'))
                }
            });
            return promise;
        })

        .controller('TitleController', function ($scope, movieService) {
            var titleController = this;
            titleController.movie = null;
            titleController.show = false;
            $scope.status;
            $scope.movies = [];
            getMovies();

            function getMovies() {
                console.log('this.getmovies', movieService);
                movieService.then(function(result){
                    $scope.movies = result
                }, function(err){
                    console.log(err);
                })
            };

            titleController.getMovie = function () {
                console.log('on click get movie');
                var movie = movieHelper.getRandom($scope.movies);
                titleController.movie = movie;
                titleController.show = true;
                $scope.$apply();
            };

            titleController.isInitialized = function () {
                return !!titleController.movie;
            };

            this.changeImage = function () {
                var imageList = ['mask.png', 'cat.png', 'creep.png'];
                var image;
                image = helper.getRandomElement(imageList);
                return image
            }

            // this.getMovie();
        });


})();