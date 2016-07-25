'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:LowerCaseCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('IsStringCtrl', function ($scope) {
    activeMenu('string');
    //dato nombre
    $scope.nombre = "jose carlos";
    // cadena de salida true/false
    $scope.cadena = angular.isString($scope.nombre);
    
  });
