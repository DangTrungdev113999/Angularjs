var app = angular.module("myApp",[]);

app.controller("myController", function($scope){
    var employees = [
        {firstName: "trung", lastName: "dang", gender: "male", salary: 5000},
        {firstName: "dat", lastName: "dia", gender: "male", salary: 2000},
        {firstName: "giang", lastName: "dai", gender: "female", salary: 1000},
        {firstName: "mai", lastName: "kim", gender: "male", salary: 5000},
        {firstName: "nghia", lastName: "dang", gender: "female", salary: 2000}
    ];
    $scope.employees = employees;
});

app.controller("nestedRepeat", function($scope){
    var countries =[
        {
            name: "UK",
            cities: [
                {name: "London"},
                {name: "Birmaingham"},
                {name: "manchessetr"}
            ]
        },
        {
            name: "USA",
            cities: [
                {name: "London"},
                {name: "Birmaingham"},
                {name: "manchessetr"}
            ]
        },
        {
            name: "Indian",
            cities: [
                {name: "London"},
                {name: "Birmaingham"},
                {name: "manchessetr"}
            ]
        },
    ];

    $scope.countries = countries;
});

app.controller("eventClick", function($scope){
    var technologies = [
        {name: "#c", like:0, dislike:0, minus:0},
        {name: "php", like:0, dislike:0, minus:0},
        {name: "javascript", like:0, dislike:0, minus:0},
        {name: "angular", like:0, dislike:0, minus:0},
        {name: "APS.net", like:0, dislike:0, minus:0}
    ];
    $scope.technologies = technologies;
    $scope.increaseLike = function(technology){
        technology.like++;
        technology.minus = technology.like - technology.dislike;
    };
    $scope.increaseDislike = function(technology){
        technology.dislike++;
        technology.minus = technology.like - technology.dislike;
    }
});

app.controller("myfilter",myfilerapp);

myfilerapp.$inject = ['$scope'];

function myfilerapp($scope){
    var employees = [
        {name: 'hai', birthDate: new Date('2/2/1999'), salary: 1500000, gender: 'female', status: true },
        {name: 'phong', birthDate: new Date('2/2/1999'), salary: 4500000, gender: 'male', status: false},
        {name: 'le', birthDate: new Date('2/2/1999'), salary: 6400000, gender: 'female', status: true },
        {name: 'hong', birthDate: new Date('2/2/1999'), salary: 2300000, gender: 'male', status: false },
        {name: 'long', birthDate: new Date('2/2/1999'), salary: 6400000, gender: 'female', status: true }  
    ];
    $scope.employees = employees;
    $scope.orderColums = 'name';



};

app.controller("myFilterClick", function($scope){
    var employees = [
        {name: 'hai', birthDate: new Date('2/2/1999'), salary: 1500000, gender: 'female', status: true },
        {name: 'phong', birthDate: new Date('2/3/1999'), salary: 4500000, gender: 'male', status: false},
        {name: 'le', birthDate: new Date('2/4/1999'), salary: 6400000, gender: 'female', status: true },
        {name: 'hong', birthDate: new Date('2/3/1999'), salary: 2300000, gender: 'male', status: false },
        {name: 'long', birthDate: new Date('2/7/1999'), salary: 6400000, gender: 'female', status: true }  
    ];
    $scope.employees = employees;
    $scope.sortColums = 'name';
    $scope.reverse = false;
    $scope.searchFilter = '';
    $scope.hideSalary = false;
    $scope.sortData = function(colum){
        if($scope.sortColums == colum){
            $scope.reverse = !$scope.reverse;
        }else{
            $scope.reverse = false;
        }
        $scope.sortColums = colum;
    };
    $scope.getSortClass = function(colum){
        if($scope.sortColums == colum){
            return $scope.reverse ? 'arrow-up' : 'arrow-down';
        }else{
            return '';
        }
    }
});
