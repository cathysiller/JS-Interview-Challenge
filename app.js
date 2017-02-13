var myApp = angular.module('myApp', []);

myApp.controller('indexController', function($scope, $http){
    $http.get("http://jsonplaceholder.typicode.com/posts")
        .success(function(response) {
            $scope.users = response;
    });
  
    $scope.orderByField = 'userId';
    $scope.reverseSort = false;
});