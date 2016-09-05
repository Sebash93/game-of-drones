'use strict';

/**
 * @ngdoc function
 * @name gameOfDronesApp.controller:ScoreboardCtrl
 * @description
 * # ScoreboardCtrl
 * Controller of the gameOfDronesApp
 */
angular.module('gameOfDronesApp')
  .controller('ScoreboardCtrl', function ($scope, requests) {
    requests.getScoreBoard().then(function (res) {
      $scope.players = res.data;
    })
  });
