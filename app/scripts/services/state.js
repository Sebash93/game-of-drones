'use strict';

/**
 * @ngdoc service
 * @name gameOfDronesApp.state
 * @description
 * # state
 * Service in the gameOfDronesApp.
 */
angular.module('gameOfDronesApp')
  .service('state', function () {
    var state = {
      playersNames: {},
      moves: {
        "paper": { move: "paper", kills: "rock"},
        "rock": { move: "rock", kills: "scissors"},
        "scissors": { move: "scissors", kills: "paper"}
      },
      absoluteWinner: null,
      absoluteLoser: null
    }

    return {
      setPlayersNames: function (names) {
        state.playersNames = names
      },
      setFinalResult: function (winner, loser) {
        state.absoluteWinner = winner,
        state.absoluteLoser = loser
      },
      get: function (key) {
        console.log(state);
        if (state[key]) {
          return state[key]
        } else {
          console.warn('Key', key, 'does not exists in the state');
        }
      }
    }

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
