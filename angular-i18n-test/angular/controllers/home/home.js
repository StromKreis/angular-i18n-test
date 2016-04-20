'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        title: '[[[ApplicationName]]]',
        templateUrl: '/angular/controllers/home/home.html',
        controller: 'homeCtrl'
    });
}])

.controller('homeCtrl', [function ($rootScope, $scope) {
    


}]);