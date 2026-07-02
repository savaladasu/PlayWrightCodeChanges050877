// ======== forEach(), map(), filter(), reduce(), some(), every() ============

// 1. forEach() - Executes a function once for each array element
// It takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array (optional) - The array the current element belongs to.


// Ex1: Get index of all the fruits along with value.
let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

console.log("Printing fruites along with index using for loop....");

for(let i in fruits)
{
    console.log(i);
}

// Ex.1.1 anonymous (Nameless function) 

console.log("Printing fruites along with index using for..each method....");

fruits.forEach(function(element, index){

    console.log(`${index}`,`${element}`)



// Ex.1.2 Arrow function 

console.log("Printing fruites along with index using for..each method....");

fruits.forEach((element, index) =>{

    // console.log(`${index}`,`${element}`)
    console.log(index,element)

// Ex 2 Print all elements in uppercase characters

// using arrow function

    fruits.forEach((element) =>{

    console.log(element.toUpperCase());

// ====================================================================================================

// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})


// Ex1: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers: number[] = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function (element) {
    return (element * element);
})

console.log("Squared numbers: ", squaredNumbers); // [ 1, 4, 9, 16, 25 ]
console.log("Original array: ", numbers);        // [ 1, 2, 3, 4, 5 ]


// Ex2: Double each number [1,2,3,4,5] ---> [2,4,6,8,10]

/*
let doubledValues = numbers.map((element) => {
    return (element * 2);
})
*/

let doubledValues = numbers.map((element) => element * 2); // If you have a single return statement inside the arrow function then {} and 'return' keyword are optional

console.log("Doubled Numbers: ", doubledValues); // [ 2, 4, 6, 8, 10 ]

// ===========================================================================================

// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array){})


// Ex1: Get the only even numbers from an array

/*
let evenNumbers = numbers.filter((num) => {
    return (num % 2 == 0);
})
*/

let evenNumbers = numbers.filter((num) => num % 2 == 0);

console.log ("Print Even Num", evenNumbers) // [2,4]

// Ex2: Get the only numbers greater than 3 from an array

let filteredNumbers = numbers.filter((num) => num > 3);
console.log("Numbers greater than 3: ", filteredNumbers); // [ 4, 5 ]


// ===========================================================================================

// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed


//Ex1: Get the total (sum) of all the elements in an array

/* let total = 0;

for (let i = 0; i < numbers.length; i++) 
{
    total = total + numbers[i];
}

console.log("Sum of all the numbers:", total); // Sum of all the numbers: 15
 */

//Ex1.1: Get the total (sum) of all the elements in an array with the help of reduce method

/*
let reduceResult = numbers.reduce((total, element) => {
    return (total + element);
}, 0); // Here 0 is default value of accumulator
*/

let reduceResult = numbers.reduce((total, element) => total + element, 0); // Here 0 is default value of accumulator

console.log("Sum of elements in array:", reduceResult); // 15

// ====================================================================================================
// 5. some() - Checks if any element satisfies a condition

// Returns true if at least one element passes the condition, else false
// Syntax: array.some(function(currentValue, index, array){})


//Ex1: Check array contains negative values

let hasNegative:boolean = numbers.some((element) => element < 0);
console.log("Does array contains negatives? ", hasNegative); // false


//Ex2: Check array contains positive values

let hasPositive:boolean = numbers.some((element) => element > 0);
console.log("Does array contains Positives? ", hasPositive); // true

// =====================================================================================================

// 6. every() - Checks if all elements satisfy a condition

// Returns true if all elements pass the condition, else false
// Syntax: array.every(function(currentValue, index, array){})


//Ex1:
let allEven = numbers.every((element) => element % 2 == 0);
console.log("Are all numbers are even?", allEven); // false


//Ex2:
let allGreaterThanOne = numbers.every((element) => element >= 1); // Note: Instructor's log asks "greater than one" but code checks greater than or equal to 1
console.log("Are all the numbers greater than one?", allGreaterThanOne); // true


});