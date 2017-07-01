var movieFactory = (function () {
    var movieProps = ['name', 'year', 'director', 'mainActor', 'coStars', 'writer', 'rating', 'releaseDate'];
    return {
        create: function (movieArray) {
            var movie = {};
            for (var i = 0; i < movieArray.length; i++) {
                movie[movieArray[i]] = movieProps[i];
            }
            return movie;
        }
    }

})();