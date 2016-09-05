'use strict';

/**
 * @ngdoc overview
 * @name gameOfDronesApp
 * @description
 * # gameOfDronesApp
 *
 * Main module of the application.
 */
angular
  .module('gameOfDronesApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
      })
      .when('/chooseName', {
        templateUrl: 'views/choosename.html',
        controller: 'ChoosenameCtrl',
        controllerAs: 'chooseName'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .when('/winner', {
        templateUrl: 'views/winner.html',
        controller: 'WinnerCtrl',
        controllerAs: 'winner'
      })
      .when('/scoreBoard', {
        templateUrl: 'views/scoreboard.html',
        controller: 'ScoreboardCtrl',
        controllerAs: 'scoreBoard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
