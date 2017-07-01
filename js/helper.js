var helper = (function () {
    var module = {};

    module.call_HTTP = function (url, callback, context) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onload = function () {
            callback.call(context, xmlHttp.responseText);
        };

        xmlHttp.open("GET", url);
        xmlHttp.send();
    };

    module.getRandomElement = function (array) {
        var ranNum = Math.floor(Math.random() * (array.length - 1));
        return array[ranNum];
    };

    return module;
}());