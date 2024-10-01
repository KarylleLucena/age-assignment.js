//create//create a program that prompts the user to enter their age.
//use if else structure to determine if the user is a child, teenager, or an adult.

let age = prompt("Enter your age:");

// Convert the input to a number
age = parseInt(age);

// Use if-else statements to determine the age category
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
