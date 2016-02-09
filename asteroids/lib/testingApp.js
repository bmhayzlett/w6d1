/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var MovingObject = __webpack_require__ (1);
	var Util = __webpack_require__ (2);
	var Asteroid = __webpack_require__(3);
	var Game = __webpack_require__(4);
	var GameView = __webpack_require__(5);


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


/***/ },
/* 1 */
/***/ function(module, exports) {

	function MovingObject(options) {
	  this.pos = options.pos;
	  this.vel = options.vel;
	  this.radius = options.radius;
	  this.color = options.color;
	}

	MovingObject.prototype.draw = function(ctx) {
	  ctx.fillStyle = this.color;
	  ctx.arc(this.pos[0],this.pos[1],this.radius, 0,2*Math.PI);
	  ctx.fill();
	};


	MovingObject.prototype.move = function() {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	};

	// testObj = new MovingObject(
	//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});

	 module.exports = MovingObject;


/***/ },
/* 2 */
/***/ function(module, exports) {

	// function Utils() {
	//
	//
	//   function inherits (ChildClass, ParentClass) {
	//     function Surrogate() {}
	//     Surrogate.prototype = ParentClass.prototype;
	//     ChildClass.prototype = new Surrogate();
	//     ChildClass.prototype.constructor = ChildClass;
	//   }
	//
	//   function randomVec(length) {
	//     var randX = length * Math.random();
	//     var randY = Math.sqrt(Math.pow(length, 2) - Math.pow(randX, 2));
	//     randY = randY * [-1,1][getRandomIntInclusive(0,1)];
	//     randX = randX * [-1,1][getRandomIntInclusive(0,1)];
	//     return [randX,randY];
	//   }
	//
	  function getRandomIntInclusive(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	//
	// }

	var Utils = {
	  inherits: function (ChildClass, ParentClass) {
	    function Surrogate() {}
	    Surrogate.prototype = ParentClass.prototype;
	    ChildClass.prototype = new Surrogate();
	    ChildClass.prototype.constructor = ChildClass;
	  },

	  randomVect: function (length) {
	    var randX = length * Math.random();
	    var randY = Math.sqrt(Math.pow(length, 2) - Math.pow(randX, 2));
	    randY = randY * [-1,1][getRandomIntInclusive(0,1)];
	    randX = randX * [-1,1][getRandomIntInclusive(0,1)];
	    return [randX,randY];
	  },

	  // getRandomIntInclusive: function (min, max) {
	  //   return Math.floor(Math.random() * (max - min + 1)) + min;
	  // }
	};






	module.exports = Utils;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__ (2);
	var MovingObject = __webpack_require__ (1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(3);
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(4);

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


/***/ }
/******/ ]);