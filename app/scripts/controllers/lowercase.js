'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:LowerCaseCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('LowerCaseCtrl', function ($scope) {
    activeMenu('lower');
    //variable mayuscula
    $scope.mayuscula = "Alexander Karl";
    // variable nombre
    $scope.nombre = angular.lowercase($scope.mayuscula);
    
  });
