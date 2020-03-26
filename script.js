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
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.
var movieArray = ['pulp fiction', 'eternal sunshine of the spotless mind', 'planes, trains, and automobiles'];

console.log(movieArray);
console.log(movieArray[0]);
console.log(movieArray[1]);
console.log(movieArray[2]);

//arrays store info by index order, but objects can store data with more details.

var leahObject = {
    firstName: "Leah",
    lastName: "Gwin",
    age: 27
}
console.log(leahObject.firstName); //"Leah"

//can put an array in an object

var lindseyObject = {
    firstName: "Lindsey",
    lastName: "Crittendon",
    age: 34,
    hobbies: ['beekeeping', 'reading', 'writing']
}

console.log(lindseyObject.hobbies[2]);
console.log(lindseyObject.hobbies.length);
console.log(lindseyObject.hobbies);
console.log(`${firstName} ${lastName} is ${age}, and she likes ${lindseyObject.hobbies[0]} more than anything!`)

//can also have arrays of objects
var izzyObject = {
    firstName: "Isabelle",
    lastName: "Clagg",
    age: 10,
    hobbies: ['beekeeping', 'reading', 'gaming', 'playing with her dogs']
}
var jeremyObject = {
    firstName: "Jeremy",
    lastName: "Crittendon",
    age: 34,
    hobbies: ['beekeeping', 'picking on his wife', '3D printing', 'watching television']
}
var familyArray = [lindseyObject, izzyObject, jeremyObject];
console.log(familyArray[1].hobbies[2]);
console.log(`${familyArray[1].firstName} tries to get out of her homework all the time by ${familyArray[1].hobbies[2]}!`) //omfg it feels good to understand that.

















