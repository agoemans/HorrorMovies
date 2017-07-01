var movieCreator = (function () {
    return {
        create: function () {
            var movieList = [];
            for (var i = 0; i < movies.length; i++) {
                var movie = movieFactory.create(movies[i]);
                movieList.push(movie);
            }
            return movieList;
        }
    }

})();