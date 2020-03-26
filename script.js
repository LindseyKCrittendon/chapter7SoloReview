// alert("Hello, world")

//variables - like boxes with stuff stored inside

//primitive data types.  numbers not in quotes while strings are in quotes

// var totalCost;
var totalWithTax;

var costPerItem = 2.50;
var numberOfItems = 4;
var taxRate = 0.06;

totalCost = costPerItem * numberOfItems;
totalWithTax = totalCost + (taxRate * totalCost);

console.log(totalWithTax)

//booleans are true/false statements.  NO QUOTES

var likesDogs = true;

var allergicToDogs = false;

console.log(allergicToDogs)

//STRINGS have quotes and can be combined with other values.

//CONCATENATION-combine a string with another string

//INTERPOLATION - combine a string with variable or expression

//lightening exercise
 
var firstName = "Lindsey";
var lastName = "Crittendon";
var age = "too old";
var likesToTravel = false;

console.log(firstName, lastName, age, likesToTravel)

//ARRAYS - stores info in order

var gradesArray = [97, 55, 62, 82, 79, 91, 74, 86];
var firstItem = gradesArray[0]
var secondItem = gradesArray[1]
var thirdItem = gradesArray[2]

console.log(gradesArray.length) //gives us the total number of items in the array

//add a grade to the array
gradesArray.push(92);

//you can also add a grade or replace one by this method
gradesArray[9] = 83;

console.log(gradesArray[9])
gradesArray[1] = 22;
console.log(gradesArray[1])

//add, remove, or replace items with .splice()

var months = ['jan', 'march', 'april', 'june'];
console.log(months);
//inserts 'feb' at an index of 1 and removes 0 elements
months.splice(1, 0, 'feb');
console.log(months);
//inserts may at index 4 and removes june
months.splice(4, 1, 'may');
console.log(months);

//lightening exercise
var movieArray = ['pulp fiction', 'eternal sunshine of the spotless mind', 'planes, trains, and automobiles'];

console.log(movieArray);
console.log(movieArray[0]);
console.log(movieArray[1]);
console.log(movieArray[2]);











