var Asteroid = require('./asteroid');
function Game(numAsteroids) {
  this.numAsteroids = numAsteroids;
  this.dimX = 1000;
  this.dimY = 1000;
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
  ctx.clearRect(0,0,this.dimX, this.dimY);
  for (var i; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  for (var i; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
    var pos = this.asteroid[i].pos;
    this.asteroid[i].pos = this.wrap(pos);
  }
};

Game.prototype.wrap = function (pos) {
  var xpos = pos[0] % this.dimX;
  var ypos = pos[1] % this.dimY;
  return [xpos, ypos];
};

module.exports = Game;
