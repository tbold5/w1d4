var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
  var sortedStudents = students.sort(function(a, b) {
    if (a.name > b.name) {
      return a.name > b.name
      } else if (a.name === b.name) {
        return a.age < b.age
      }

   }); console.log(sortedStudents);

//names ascending order
//ages descending order