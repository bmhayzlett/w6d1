var utils = require ("./utils");
var MovingObject = require ("./movingObject");

var COLOR = "gray";
var RADIUS = 50;
var SPEED = 5;

function Asteroid (options) {
  this.pos = options.pos;
  this.vel = utils.randomVect(SPEED);
  this.radius = RADIUS;
  this.color = COLOR;
}



utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
