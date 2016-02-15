'use strict';
angular.module('appRoutes',[]);
angular.module('appRoutes').config(function($routeProvider){
    $routeProvider
    // route
    .when('/Home', {
        templateUrl : 'views/home.html',
        controller  : 'homeCtrl'
    })
    .when('/Line', {
        templateUrl : 'views/preview.html',
        controller  : 'lineCtrl'
    })
    .when('/Pie', {
        templateUrl : 'views/piegraph.html',
        controller  : 'pieCtrl'
    });

});