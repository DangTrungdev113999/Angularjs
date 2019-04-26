var app = angular.module('app', []);

app.controller('myController', function($scope, $http) {
    $http.get('data/products.json').then(function(res) {
        $scope.products = res.data
    })
});
