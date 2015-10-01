angular.module('appRoutes',[]);
angular.module('appRoutes').config(function($routeProvider, $locationProvider){
    $routeProvider
    // route
    .when('/Home', {
        templateUrl : 'public/views/home.html',
        controller  : 'homeCtrl'
    })
    .when('/Line', {
        templateUrl : 'public/views/preview.html',
        controller  : 'lineCtrl'
    })
    .when('/Pie', {
        templateUrl : 'public/views/piegraph.html',
        controller  : 'pieCtrl'
    });

    $locationProvider.html5Mode(true);

});