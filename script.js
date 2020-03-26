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


// Lightning Exercise
// All About Me Pt. 2
// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

var lindseyInfo = {
    firstName: "Lindsey",
    lastName: "Crittendon",
    age: 34,
    likesToTravel: true,
    favoriteMovies: ['pulp fiction', 'eternal sunshine of the spotless mind']
}
console.log(lindseyInfo);
console.log(lindseyInfo.favoriteMovies[1]) //it's all so clear. holy tittyfarts, batman

// 1. Today's weather
// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

var todaysWeather = {
    temperature: 73,
    conditions: "bright and sunny",
    sunriseTime: "7:03AM",
    sunsetTime: "8:15PM",
    };
    console.log(todaysWeather);
    console.log(todaysWeather.temperature);
    console.log(todaysWeather.conditions);
    console.log(todaysWeather.sunriseTime);
    console.log(todaysWeather.sunsetTime);
    console.log(`It's currently ${todaysWeather.conditions} and ${todaysWeather.temperature}.  The sun rose this morning at ${todaysWeather.sunriseTime} and will set at ${todaysWeather.sunsetTime}`);

//     2. Weather Data
// In your JavaScript file, copy and paste the following array:

// var highTemperatures = [55, 57, 53, 47, 56, 50];
// var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?
var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];
console.log(highTemperatures[0]);
console.log(lowTemperatures[5]);

var highTemperatureSum = 




    






















