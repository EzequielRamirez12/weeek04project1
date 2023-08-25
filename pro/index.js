//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.


let ages = [3, 9, 23, 64, 2, 8, 28, 93];


let difference = ages[ages.length - 1] - ages[0];
console.log("Difference between last and first age:", difference);


ages.push(37);
difference = ages[ages.length - 1] - ages[0];
console.log("New difference with added age:", difference);


let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);
//How do you access the last element of any array?


let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}
console.log("Concatenated names:", concatenatedNames);


let lastElement = ages[ages.length - 1];
console.log("Last element of ages array:", lastElement);


let firstElement = ages[0];
console.log("First element of ages array:", firstElement);


let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Array of name lengths:", nameLengths);
//How do you access the first element of any array?

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array


let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumOfNameLengths);


function concatenateWord(word, n) {
    return word.repeat(n);
}

console.log(concatenateWord('Hello', 3)); 


function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(createFullName('John', 'Doe')); 


function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}

console.log(isSumGreaterThan100([40, 30, 35])); 


function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(calculateAverage([25, 30, 35])); 
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverageArrays(array1, array2) {
    let average1 = calculateAverage(array1);
    let average2 = calculateAverage(array2);
    return average1 > average2;
}

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log(compareAverageArrays([10, 20, 30], [5, 15, 25])); 


function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log(willBuyDrink(true, 15)); 



function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); // Output: 77


//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


