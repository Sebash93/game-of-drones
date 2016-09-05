'use strict';

/**
 * @ngdoc function
 * @name gameOfDronesApp.controller:WinnerCtrl
 * @description
 * # WinnerCtrl
 * Controller of the gameOfDronesApp
 */
angular.module('gameOfDronesApp')
  .controller('WinnerCtrl', function ($scope, $location, state, requests) {
    $scope.absoluteWinner = state.get('absoluteWinner');

    $scope.newGame = function() {
      state.setFinalResult(null);
      $location.path('/game')
    }

    if ($scope.absoluteWinner) {
      var result = {
        winner: $scope.absoluteWinner.toLowerCase(),
        loser: state.get('absoluteLoser').toLowerCase()
      }
      requests.saveNewScore(result).then(function (res) {
        console.log(res);
      })
    }

  });
