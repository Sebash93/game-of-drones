'use strict';

angular.module('gameOfDronesApp')
  .service('requests', function ($http) {
    var endPoint = 'http://localhost:8080/api';
    var scoreEndPoint = endPoint + '/score';

    return {
      getScoreBoard: function () {
        return $http({method: 'GET', url: scoreEndPoint});
      },
      saveNewScore: function (result) {
        return $http.post(scoreEndPoint, result);
      }
    }
  });
