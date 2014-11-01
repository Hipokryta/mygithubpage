'use strict';

/**
 * @ngdoc overview
 * @name githubstronaApp
 * @description
 * # githubstronaApp
 *
 * Main module of the application.
 */
angular
  .module('githubstronaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
