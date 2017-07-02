var movieFactory = (function () {
    var movieProps = ['name', 'year', 'director', 'mainActor', 'coStars', 'writer', 'rating', 'releaseDate', 'tagline'];
    return {
        create: function (movieArray) {
            var movie = {};
            for (var i = 0; i < movieArray.length; i++) {
                movie[movieProps[i]] = movieArray[i];
            }
            return movie;
        }
    }

})();