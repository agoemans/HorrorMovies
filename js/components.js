angular.module('components', [])

    .directive('pane', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element){
                this.$onInit = function(){

                };
                this.getMovie = function(){

                }
            }
        }
    })