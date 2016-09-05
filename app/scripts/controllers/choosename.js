'use strict';

/**
 * @ngdoc function
 * @name gameOfDronesApp.controller:ChoosenameCtrl
 * @description
 * # ChoosenameCtrl
 * Controller of the gameOfDronesApp
 */
angular.module('gameOfDronesApp')
  .controller('ChoosenameCtrl', function ($scope, $location, state) {
    $scope.saveNames = function () {
      var names = {
        1: $scope.playersNames.first,
        2: $scope.playersNames.second,
      }
      state.setPlayersNames(names);
      $location.path( '/game' );
    }
  });
