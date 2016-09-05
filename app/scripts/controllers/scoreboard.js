'use strict';

angular.module('gameOfDronesApp')
  .controller('ScoreboardCtrl', function ($scope, requests) {
    requests.getScoreBoard().then(function (res) {
      $scope.players = res.data;
    })
  });
