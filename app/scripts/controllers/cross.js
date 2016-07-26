'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('CrossCtrl', function ($scope) {
    activeMenu('cross');

  });

  app.config(
      function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(
          [
            'http://localhost:9000/**',
            'http://www.refsnesdata.no/**'
          ]
        );
      }
  );
