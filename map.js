  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
}
const myResults = nums.map(multiplyByTwo);
console.log(myResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplfied w/ map() + arrow function
const arrowFunc = nums.map(num => num * 2);
console.log(arrowFunc)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);


// Challenge - Use the destructuring assignment to create two variables and 
// assign them values from calling the map method on the students array. 
// The function provided to the map method can either be created within 
// the map method or outside and passed in but in either case, it should 
// use an arrow function. 
// The map method should return an array for each item in the students array 
// and this new array should contain 2 items: items name value and items results value.

let collegeStudents = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// Create variables named john and rest using the destructuring assignment
// Assign the variable values from calling the map method on the collegestudents array
// Within the map method use an arrow function
let [john, ...rest] = collegeStudents.map(student => [student.name, student.results]);
// Log out the variable named john to see its value
console.log(john);
// Log out the variable named rest to see its value
console.log(rest);

// The following provides a function created outside of the map method
const mapper = (itm) => [itm.name, itm.results];
let [John, ...Rest] = collegeStudents.map(mapper);
console.log(John);
console.log(Rest);