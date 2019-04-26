var myApp = angular.module("DEMO",[])
    .controller("myController", function($scope){

    }).directive("welcomeText", function() {
        return {
            templateUrl: "/example.html"
        }
    });