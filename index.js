// let myName = "modupe";

// console.log(myName);




// // // task 1 if else


// let voterAge = 18
// let userAge = 17

// if(userAge >= voterAge){
//     console.log("you are eligible to vote")
// }else{
//      console.log("you're not old enough vote, sorry!")
     
// }

// // // task 2



// let numberToCheck =17


// if(numberToCheck % 2 === 0 ){
//     console.log("it's an even number")
// }else
//      console.log("it's an odd number")

// // // task 3 for if else

// let wordToCheck = "table"; 


// if(wordToCheck >= table){
//     console.log("it's a consonant")
    
// }else{
//     console.log("it 'a verb")
// }





// // // task4



// // // task 5(write the html and css later)

// Get user input for the first number
// let num1 = prompt("Enter the first number:");

// Convert the input to a number
// num1 = parseFloat(num1);

// Get user input for the second number
// let num2 = prompt("Enter the second number:");

// Convert the input to a number
// num2 = parseFloat(num2);

// Check if the inputs are valid numbers
// if (!isNaN(num1) && !isNaN(num2)) {
//   // Addition
//   let additionResult = num1 + num2;
//   console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);

// //   // Subtraction
//   let subtractionResult = num1 - num2;
//   console.log(`Subtraction: ${num1} - ${num2} = ${subtractionResult}`);

// //   // Multiplication
//   let multiplicationResult = num1 * num2;
//   console.log(`Multiplication: ${num1} * ${num2} = ${multiplicationResult}`);

// //   // Division
//   if (num2 !== 0) {
//     let divisionResult = num1 / num2;
//     console.log(`Division: ${num1} / ${num2} = ${divisionResult}`);
//   } else {
//     console.log("Cannot divide by zero.");
//   }

// //   // Modulus
//   if (num2 !== 0) {
//     let modulusResult = num1 % num2;
//     console.log(`Modulus: ${num1} % ${num2} = ${modulusResult}`);
//   } else {
//     console.log("Cannot calculate modulus with zero.");
// }

// } else {
//   Display an error message if inputs are not valid numbers
//   console.log("Please enter valid numbers for calculations.");
// }





// // // switch statement

// let guessedDaysOfTheWeek = prompt('Enter a number (1-7) to guess the day of the week:');
// guessedDaysOfTheWeek = Number(guessedDaysOfTheWeek);

// if (guessedDaysOfTheWeek >= 1 && guessedDaysOfTheWeek <= 7) {
//     switch (guessedDaysOfTheWeek) {
//         case 1:
//             console.log('Sunday');
//             break;
//         case 2:
//             console.log('Monday');
//             break;
//         case 3:
//             console.log('Tuesday');
//             break;
//         case 4:
//             console.log('Wednesday');
//             break;
//         case 5:
//             console.log('Thursday');
//             break;
//         case 6:
//             console.log('Friday');
//             break;
//         case 7:
//             console.log('Saturday');
//             break;
//         default:
//             console.log('Invalid input. Please enter a number between 1 and 7.');
//     }
// } else {
//     console.log('Invalid input. Please enter a number between 1 and 7.');
// }





// // // question2

// let evaluateGrade = window.prompt("Enter student Grade:");
// evaluateGrade = Number(evaluateGrade);

// switch (true) {
//     case (evaluateGrade >= 1 && evaluateGrade < 20):
//         console.log("Student grade is F");
//         break;
//     case (evaluateGrade >= 20 && evaluateGrade < 30):
//         console.log("Student grade is E");
//         break;
//     case (evaluateGrade >= 30 && evaluateGrade < 40):
//         console.log("Student grade is D");
//         break;
//     case (evaluateGrade >= 40 && evaluateGrade < 50):
//         console.log("Student grade is C");
//         break;
//     case (evaluateGrade >= 50 && evaluateGrade < 60):
//         console.log("Student grade is B");
//         break;
//     case (evaluateGrade >= 60 && evaluateGrade <= 100):
//         console.log("Student grade is A");
//         break;
//     default:
//         console.log("Invalid grade input");
// }


// // // question3
// // // Month Name Displayer: Print the name of a month for a given number (1-12).

// let sunday = 1
// let monday = 2
// let tuesday = 3
// let wednesday = 4
// let thursday = 5
// let friday = 6
// let saturday = 7

// let guessedDaysOfTheWeek = prompt('guess days of the Week')
// guessedDaysOfTheWeek = number(guessedDaysOfTheWeek)
// console.log(guessedDaysOfTheWeek)

// let guessedMonthOfTheYear = prompt('Enter a number (1-12) to guess the month:');
// guessedMonthOfTheYear = Number(guessedMonthOfTheYear);

// if (guessedMonthOfTheYear >= 1 && guessedMonthOfTheYear <= 12) {
//     switch (guessedMonthOfTheYear) {
//         case 1:
//             console.log('January');
//             break;
//         case 2:
//             console.log('February');
//             break;
//         case 3:
//             console.log('March');
//             break;
//         case 4:
//             console.log('April');
//             break;
//         case 5:
//             console.log('May');
//             break;
//         case 6:
//             console.log('June');
//             break;
//         case 7:
//             console.log('July');
//             break;
//         case 8:
//             console.log('August');
//             break;
//         case 9:
//             console.log('September');
//             break;
//         case 10:
//             console.log('October');
//             break;
//         case 11:
//             console.log('November');
//             break;
//         case 12:
//             console.log('December');
//             break;
//         default:
//             console.log('Invalid input. Please enter a number between 1 and 12.');
//     }
// } else {
//     console.log('Invalid input. Please enter a number between 1 and 12.');
// }


// // question 4
// // Simple Menu: Create a menu with a few options and execute different actions
// // based on the user's choice.



console.log("1. Rice");
console.log("2. Beans");
console.log("3. Chicken");
console.log("4. Exit");


let userChoice = prompt("Enter your choice (1-4):");
userChoice = parseInt(userChoice);


switch (userChoice) {
  case 1:
    console.log("You selected Rice");
   
    break;
  case 2:
    console.log("You selected Beans");
   
    break;
  case 3:
    console.log('You selected Chicken');
    
    break;
  case 4:
    console.log("Exiting the menu");
    break;
  default:
    console.log("Invalid choice. Please enter a number between 1 and 4.");
}



// // task for loop
let sum = 0;

for (let i = 1; i <= 8; i++) {
    sum =i;
    
}

console.log(sum);

// Countdown Timer: Print a countdown from a given number to 1.

let countdown = 0;

for (let z = 4; z >=1;z--){
    countdown =z;
}
     console.log(countdown)



// question 4
    //  Multiplication Table Generator: Print a multiplication table for a given number.

    let givenNumber = 2;

    for (let x = 1; x <= 4; x++){
        givenNumber = x *2;
    }

    console.log(givenNumber)



    // question 4
//  Array Element Printer: Print each element of an array.

   const array = [1,2,3,4,5]
   
   for(let x = 0; x <array.length; x++)
   console.log(array[x])


//    question 5
// String Repeater: Repeat a string a specified number of times.

const repeatedName = 'Temi';
const repeatNumber = 3; 

let repeatedString = '';

for (let i = 0; i < repeatNumber; i++) {
    repeatedString += repeatedName;
}

console.log(repeatedString);




// function

// question 1

// Greeter Function: Take a person's name as input and greet them with a
// personalized message.


printMyName('Iremiposi');
function printMyName(name){
  console.log(`Hello ${name}, Welcome! we are happy to have.`)
}


// question 2
// Area Calculator: Calculate the area of a rectangle, triangle, or circle.


function areaOfRectangle(area1, area2, area3, area4){
  let totalArea = area1 + area2 + area3 + area4
  console.log(totalArea)
}

areaOfRectangle(50,50, 20, 20)



// question 3
// Palindrome Checker: Determine if a given word or phrase is a palindrome
// (reads the same backward as forward).


function isPalindrome(word){
  // Convert the word to lowercase to make it case-insensitive
  word = word.toLowerCase();
  
  // Remove non-alphanumeric characters from the word using a regular expression
  const cleanWord = word.replace(/[^a-z0-9]/g, '');
  
  // Reverse the cleaned word
  const reversedWord = cleanWord.split('').reverse().join('');
  
  // Check if the original word is equal to its reversed version
  return cleanWord === reversedWord;
}

console.log(isPalindrome("madam"))  
console.log(isPalindrome("hello"))

// question 4
// Number Reverser: Reverse the digits of a given number.


function numberReverse(number) {
  
  const reversedNumber = parseFloat(number.toString().split('').reverse().join(''));

  return reversedNumber;
}

console.log(numberReverse(123456));  


// question 5
// Simple Sorting Function: Sort an array of numbers in ascending or
// descending order.


  function sortNumbers(arr, order) {
    if (order === 'ascending') {
        return arr.slice().sort((a, b) => a - b);
    } else if (order === 'descending') {
        return arr.slice().sort((a, b) => b - a);
    } else {
        return "Invalid order. Please specify 'ascending' or 'descending'.";
    }
}

const numbers = [6, 8, 7, 4, 3, 9, 2];

console.log("Ascending order:", sortNumbers(numbers, 'ascending'));
console.log("Descending order:", sortNumbers(numbers, 'descending'));

