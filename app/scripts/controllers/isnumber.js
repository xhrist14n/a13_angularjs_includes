'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:LowerCaseCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('IsNumberCtrl', function ($scope) {
    activeMenu('number');
    //dato
    $scope.nombre = parseInt("82462376423781");
    // eavaluador en la variable numero
    $scope.numero = angular.isNumber($scope.nombre);
    
  });
