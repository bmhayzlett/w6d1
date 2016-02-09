var Game = require('./game');

function GameView(ctx,game) {
  this.game = game;
  this.ctx = ctx;
  // debugger;
}
GameView.prototype.start = function() {
  setInterval(function() {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }.bind(this), 20);
};

module.exports = GameView;
