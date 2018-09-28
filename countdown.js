var countdownGenerator = function (x) {

  return function() {
    if (x > 0) {
      x--;
      console.log('T-minus ' + (x + 1) + "...")
    } else if (x === 0) {
      x--;
      console.log('Blast Off!')
    } else { (x < 0) // else behaves differently than else if, thus we have to {} before the argument.
      x--;
      console.log('Rockets already gone, bub!')
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

// I want to count down from 3
// When it is zero I want to say "Blast Off!"
// Any time after zero I want to say "Rockets already gone, bub!"