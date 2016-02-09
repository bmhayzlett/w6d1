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
