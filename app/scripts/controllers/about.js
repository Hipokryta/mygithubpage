'use strict';

/**
 * @ngdoc function
 * @name githubstronaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubstronaApp
 */
angular.module('githubstronaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
