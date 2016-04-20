'use strict';

angular.module('app', [
  'ngRoute',
  'app.service.dnsimple',
  'app.home'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/home' });
}])
.controller('mainController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    
}]);