function Kryptonian(name) {
  this.name = name;
}

function Superman(name) {
  Kryptonian.call(this, name);
}

// function Surrogate() {}
//
// Surrogate.prototype = Kryptonian.prototype;
// Superman.prototype = new Surrogate();
//



Function.prototype.inherits = function (ancestor) {
  function Surrogate() {}
  Surrogate.prototype = ancestor.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Superman.inherits(Kryptonian);

var clark = new Superman("Clark Kent");
console.log(clark.name);
console.log(clark instanceof Superman);
console.log(clark.constructor);
