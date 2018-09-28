var outer = function() {
  var x = 99;

  var inner = function() {
    console.log("The value of x is: " + x);
  }
  return inner;
};

var foo = outer();
foo();