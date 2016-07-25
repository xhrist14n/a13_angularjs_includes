'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:LowerCaseCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('UpperCaseCtrl', function ($scope) {
    activeMenu('upper');
    // minuscula
    $scope.minuscula = "jose carlos";
    //mayuscula
    $scope.nombre = angular.uppercase($scope.minuscula);
    
  });
