var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/shop', {
            templateUrl: 'App/View/template/_demo.html'
        })
        .otherwise({
            redirectTo: '/shop'
        })
});