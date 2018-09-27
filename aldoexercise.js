function findWaldo(arr, found) {
    arr.forEach(function(a, i) {
      if (arr[i] === 'Waldo') {
        found(i);
      }
   })
  };


function actionWhenFound(i) {
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// "Found Waldo at index 2!"
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);