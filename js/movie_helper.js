var movieHelper = (function () {
    var module = {};

    module.getSubplot = function (str) {
        if (str.length != 0) {
            var startPos = str.indexOf(",");
            var secondStrStart = str.substring(startPos + 1, str.length);
            var nextPos = secondStrStart.indexOf(",");
            var thirdStrStart = secondStrStart.substring(nextPos + 1, secondStrStart.length)
            var myString = str.substring(startPos + 1, secondStrStart);
            return thirdStrStart
        }

        else {
            return "This sadly has no plot worth noting."
        }
    };

    module.getGenre = function () {
        var movieID = ["tt1457767", "tt0876294", "tt0082010", "tt0448120", "tt2554274", "tt1686821", "tt0103893", "tt1591095", "tt0107387", "tt0084787", "tt0295700", "tt0263488", "tt0089175", "tt0087800"];
        return helper.getRandomElement(movieID);
    };

    module.getScore = function (rating) {
        return "Rated " + rating + " on IMDB!"
    };

    module.getRandom = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    return module;
}());