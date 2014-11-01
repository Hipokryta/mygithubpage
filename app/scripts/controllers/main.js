'use strict';

/**
 * @ngdoc function
 * @name githubstronaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubstronaApp
 */
angular.module('githubstronaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
