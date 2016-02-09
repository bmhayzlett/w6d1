var Asteroid = require('./asteroid');
function Game(numAsteroids) {
  this.numAsteroids = numAsteroids;
  this.dimX = 600;
  this.dimY = 600;
  this.asteroids = [];
  this.addAsteroid();
}

Game.prototype.addAsteroid = function () {
  for (var i = 0; i < this.numAsteroids; i++) {
    this.asteroids.push(new Asteroid({pos: this.randPosition()}));
  }
};

Game.prototype.randPosition = function() {
  var randX = Math.floor(this.dimX * Math.random());
  var randY = Math.floor(this.dimY * Math.random());
  return [randX, randY];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0,this.dimX * 2, this.dimY * 2);
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
    var pos = this.asteroids[i].pos;
    this.asteroids[i].pos = this.wrap(pos);
  }
};

Game.prototype.wrap = function (pos) {

  var xpos = pos[0] % this.dimX;
  var ypos = pos[1] % this.dimY;
  if (xpos < 0) xpos = this.dimX - 1;
  if (ypos < 0) ypos = this.dimY - 1;

  return [xpos, ypos];
};

module.exports = Game;
