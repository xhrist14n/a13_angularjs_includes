'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('CodeCtrl', function ($scope) {
    activeMenu('code');

    $scope.nombre = 'juan ';

    $scope.apellidos = "martinez";

    $scope.email = 'juan@gmail.com';

  });
