var app = angular.module('App', ['ui.materialize'])
    .controller('Ctrl', ["$scope", function($scope) {
        // something here
        $scope.texttyping = [
            "A programmer is a person",
            "who fixed a problem",
            "that you dont know you have,",
            "in a way you dont understand."
        ]
    }]);

app.directive('typedjs', function() {
    return {
        restrict: 'E',

        scope: {
            strings: '='
        },

        template: '<span id="typed-output"></span>',

        link: function($scope, $element, $attrs) {

            var options = {
                strings: $scope.strings,
                typeSpeed: 0,
                contentType: "html",
                showCursor: true,
                cursorChar: "|",
                backDelay: 1500,
                startDelay: 2000,
                loop: true
            };

            $(function() {
                $("#typed-output").typed(options);
            });

        }
    };
});
