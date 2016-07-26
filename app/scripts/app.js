'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */


var app = angular.module('adminApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/include', {
      templateUrl: 'views/include.html',
      controller: 'IncludeCtrl'
    })
    .when('/code', {
      templateUrl: 'views/code.html',
      controller: 'CodeCtrl'
    })
    .when('/cross', {
      templateUrl: 'views/cross.html',
      controller: 'CrossCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });


});
