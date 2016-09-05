# Game of drones
### Requirements
This game requires Node.js, npm, Grunt and Bower to be globally installed in order to run properly.

### Initial setup
```sh
$ npm install && npm run setup
```
### Launch the API
```sh
$ npm run api
```
### Launch the Game
```sh
$ npm run app
```
### Want to have even more fun?
Now you can change the rules of the game!
Inside the services/state.js you change the "moves" object for something like this:
```javascript
{
    "paper": { move: "paper", kills: "rock"},
    "rock": { move: "rock", kills: "scissors"},
    "scissors": { move: "scissors", kills: "paper"},
    "string": { move: "string", kills: "dog"},
    "dog": { move: "dog", kills: "paper"}
}
```
