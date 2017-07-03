var movieCreator = (function () {
    function create(){
        var movieList = [];
        for (var i = 0; i < movies.length; i++) {
            var movie = movieFactory.create(movies[i]);
            movieList.push(movie);
        }
        return movieList;
    }
    return {
        getMovies: function () {
            return create();
        }
    }

})();