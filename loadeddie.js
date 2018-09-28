function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var newIndex = 0;
   // assigned new var newIndex to access to the Array
   //using mutable variable so that I can change the index so that index can increment

  return function() {
  var cheater = list[newIndex];
  newIndex += 1;
  return cheater;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());
console.log(rollLoadedDie());  // 5

// However, instead of a random die, we want to create a cheat die that would let us predict the next number.
// Create a function called makeLoadedDie() which returns a function that when called,
// seems to generate random numbers between 1 and 6,
// but in fact returns numbers in a row from a hardcoded list.

