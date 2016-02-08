function sum () {
  var total = 0;
  for (var i = 0; i < arguments.length; i++ ) {
    total += arguments[i];
  }
  return total;
}

Function.prototype.myBind = function (bound) {
  var fn = this;
  var bindArgs = [].slice.apply(arguments);
  bindArgs = bindArgs.slice(1);
  return function () {
    var callArgs = [].slice.apply(arguments);
    return fn.apply(bound, bindArgs.concat(callArgs));
  };
};


// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.says = function (sound, person) {
//   console.log(this.name + " says " + sound + " to " + person + "!");
//   return true;
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // var boundMarkov = markov.says.myBind(breakfast);
// // boundMarkov("meow", "a tree");
//
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numArgs) {
  var numbers = [];
  function _curriedSum (number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      var total = 0;
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}


Function.prototype.curry = function (numArgs) {
  var fn = this;
  var args = [];
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};


String.prototype.showMe = function (){
  console.log(this);
  console.log(arguments);
};
"abc".showMe.curry(1)("arg");






//
