'use strict';
angular.module('app.service.dnsimple', [])
.factory('dnSimpleService', function ($http) {

    var serviceFactory = {};

    var _getList = function () {
        return $http.get('/de/api/v1/location/list');
    };

    serviceFactory.list = _getList;

    return serviceFactory;
});