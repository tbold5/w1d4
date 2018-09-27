var words = ["ground", "control", "to", "major", "tom"];


// function map(arr, cb) {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     var item = arr[i];

//     result.push(cb(item));
//     // result[i] = cb(item);

//   }

//   return result;
// }

function map (changedWords, cb) {
  var result = [];
  words.map(function(currentWord, index) {
    result.push(cb(changedWords[index]))
      // the currentword to run through call back
  })
console.log(result);
  }     // i = index







var lengths = map(words, function(word) {
  return word.length;
});

var uppers = map(words, function(word) {
  return word.toUpperCase();
});

var reverses = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(lengths, uppers, reverses);

// Invoking a function map()

// console.log(map(words, function(word) {
//  return word.toUpperCase();
// }));


// Expected output

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]