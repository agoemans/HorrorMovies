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
            this.movie = null;
            this.show = false;
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

            this.getMovie = function () {
                var movie = movieHelper.getRandom(this.movies);
                this.movie = movie;
                this.show = true;
                console.log(this.movie);
                $scope.$apply();
            };

            this.processSearch = function (searchTerm) {
                var mainUrl = "http://www.omdbapi.com/";
                mainUrl = mainUrl + "?i=" + searchTerm;
                helper.call_HTTP(mainUrl, this.onJSONLoad, this);

            };


            this.onJSONLoad = function (data) {
                var obj = JSON.parse(data);
                this.movie = obj;
                this.show = true;
                $scope.$apply();

            };

            this.isInitialized = function () {
                return !!this.movie;
            };

            this.getMainActor = function () {
                if (!this.isInitialized())
                    return "";

                mainActor = this.movie.Actors.substring(0, this.movie.Actors.indexOf(","));
                return mainActor;
            };

            this.summary = function () {
                if (!this.isInitialized())
                    return "";

                return movieHelper.getSubplot(this.movie.Plot);
            };

            this.imdbRating = function () {
                if (!this.isInitialized())
                    return "";
                return movieHelper.getScore(this.movie.imdbRating);
            }

            this.changeImage = function () {
                var imageList = ['mask.png', 'cat.png', 'creep.png'];
                var image;
                image = helper.getRandomElement(imageList);
                return image
            }

            this.getMovie();
        });


})();