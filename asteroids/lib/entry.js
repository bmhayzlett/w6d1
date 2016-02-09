var MovingObject = require ("./movingObject");
var Util = require ("./utils");
var Asteroid = require("./asteroid");
var Game = require("./game");
var GameView = require("./gameView");


var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
// testObj.draw(ctx);
var game = new Game(5);

var gameView = new GameView(ctx,game);
// debugger;
gameView.start();

// var testObj = new window.MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});
//
// var canvas = document.getElementById('canvas');//.style.background = 'red';
// var ctx = canvas.getContext('2d');
// testObj.draw(ctx);
