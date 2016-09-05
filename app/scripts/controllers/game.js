'use strict';

/**
 * @ngdoc function
 * @name gameOfDronesApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the gameOfDronesApp
 */
angular.module('gameOfDronesApp')
  .controller('GameCtrl', function ($scope, $location, state) {
    var moves = state.get('moves'),
        choosenOptions = [];

    $scope.moves = moves;
    $scope.gameData = {
      round: 1,
      currentPlayer: 1,
      results: [], // Each item corresponds to winner key (1 or 2)
      playersNames: state.get('playersNames'),
      // playersNames: {  1: 'Sebas',   2: 'Carla'  },
      winner: null,
      playersCount: {
        1: 0,
        2: 0
      }
    };

    $scope.chooseOption = function(option) {
      choosenOptions.push(option);
      if (choosenOptions.length === 1) {
        $scope.gameData.currentPlayer += 1;
      } else {
        calcPartialResult();
      }
    };

    $scope.startNewRound = function() {
      if ($scope.gameData.winner < 3) $scope.gameData.round += 1;
      $scope.gameData.winner = null;
      $scope.gameData.currentPlayer = 1;
      choosenOptions = [];
    };

    function calcPartialResult() {
      var firstMove = choosenOptions[0],
          secondMove = choosenOptions[1],
          winner;

      if (moves[firstMove].kills == secondMove) {
        winner = 1
      } else if (moves[secondMove].kills == firstMove) {
        winner = 2
      } else {
        winner = 3 // This means a tie
      }
      setRoundWinner(winner)
    }

    function setRoundWinner(winner) {
      $scope.gameData.winner = winner;
      if (winner < 3) {
        $scope.gameData.results.push(winner);
        $scope.gameData.playersCount[winner] += 1;
      }
      if ($scope.gameData.playersCount[winner] == 2) {
        setFinalResult(winner)
      }
    }

    function setFinalResult(winner){
      var loser = winner == 1 ? 2 : 1;
      var winnerName = $scope.gameData.playersNames[winner];
      var loserName = $scope.gameData.playersNames[loser];
      state.setFinalResult(winnerName, loserName);
      $location.path( '/winner' );
    }
  });
