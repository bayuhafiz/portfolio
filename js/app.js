var app = angular.module('App', ['ui.materialize'])
    .controller('Ctrl', ["$scope", function($scope) {
        // something here
        $scope.texttyping = [
            "\"A programmer is a person<br>who fixed a problem<br>that you dont know you have,<br>in a way you dont understand.\""
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
                backDelay: 4000,
                startDelay: 2000,
                loop: true
            };

            $(function() {
                $("#typed-output").typed(options);
            });

        }
    };
});
