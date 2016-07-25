'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
 
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lower', {
        templateUrl: 'views/lowercase.html',
        controller: 'LowerCaseCtrl'
      })
      .when('/upper', {
        templateUrl: 'views/uppercase.html',
        controller: 'UpperCaseCtrl'
      })
      .when('/string', {
        templateUrl: 'views/isstring.html',
        controller: 'IsStringCtrl'
      })
      .when('/number', {
        templateUrl: 'views/isnumber.html',
        controller: 'IsNumberCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
