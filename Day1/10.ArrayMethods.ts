
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange", "mango"]; // Fixed typo 'fruites' -> 'fruits'

console.log("Numbers array: ", numbers); // [ 1, 2, 3, 4, 5 ]
console.log("Fruits array: ", fruits);   // [ 'apple', 'banana', 'orange', 'mango' ]

// length - attribute (Not a method)

console.log("Size of numbers array: ", numbers.length); // 5
console.log("Size of fruits array: ", fruits.length);   // 4


// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)

15.Inheritance,MethodOverriding,AccessModnumbers.push(6, 7);
console.log("After push(): ", numbers); // [1, 2, 3, 4, 5, 6, 7]


// 2. pop() - Removes the last element from an array
// Syntax: array.pop()

let lastFruit = fruits.pop(); // Fixed 'lastFruite' and 'fruites' typos
console.log("After pop(): ", fruits); // [ 'apple', 'banana', 'orange' ]
console.log("Removed Fruit is: ", lastFruit); // mango


// 3. shift() - Removes the first element from an array
// Syntax: array.shift()

let firstNumber = numbers.shift();

console.log("After shift(): ", numbers); // [ 2, 3, 4, 5, 6, 7 ]
console.log("Removed Number: ", firstNumber); // 1

// 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)

fruits.unshift("kiwi", "pear"); // Fixed typo 'fruites' -> 'fruits'
console.log("After unshift():", fruits); // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]


// 5. concat() - Combines two or more arrays
// Syntax: array.concat(array1, ..., arrayN)

let combinedArray = numbers.concat([8, 9], [10]);

console.log("Concatenated array:", combinedArray); // 2, 3, 4, 5, 6, 7, 8, 9, 10 

// 6. slice() - Extracts a section of an array
// Starting Index starts from Zero
// Ending Index will be exclusive. Ex: If 3 is Ending Index It will consider 2  (3-1=2)
// Syntax: array.slice(start, end)

// let extractedArray=fruits.slice(1,3); // Fixed 'fruites' typo
// console.log("After Slice():", extractedArray); // [ 'pear', 'apple' ]

let extractedArray = fruits.slice(2, 5);
console.log("After Slice():", extractedArray); // [ 'apple', 'banana', 'orange' ]

TypeScript
// 7. splice() - Adds/removes elements from an array(From everywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

console.log("Current elements in fruits array:", fruits); // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

//Ex1: only removing

let removedElements = fruits.splice(1, 2); // here 1 is starting index, 2 represents how many elements to be removed
console.log("After splice(1,2): ", fruits); // [ 'kiwi', 'banana', 'orange' ]
console.log("Removed Elements: ", removedElements); // [ 'pear', 'apple' ]


//Ex2: not removed but added

fruits.splice(1, 0, 'pineapple', 'grape'); // Fixed 'pipneapple' typo
console.log("After splice(1,0,'pineapple','grape'): ", fruits); // [ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]


//Ex3: both remove and add

fruits.splice(1, 2, "mango", "cherry");
console.log("After splice(1,2,'mango','cherry'):", fruits); // [ 'kiwi', 'mango', 'cherry', 'banana" ]

TypeScript
// 8. indexOf() - Finds the index of an element, If element not found then return -1
// Syntax: array.indexOf(searchElement)  (or)  array.indexOf(searchElement, Starting Index)

//Ex 1
let bananaIndex = fruits.indexOf("banana"); // Fixed typo 'fruites' -> 'fruits'
console.log("Index of banana:", bananaIndex); // 3

//Ex 2
let papayaIndex = fruits.indexOf("papaya");
console.log("Index of Papaya: ", papayaIndex); // -1

//Ex 3
bananaIndex = fruits.indexOf("banana", 2);
console.log("Index of banana: ", bananaIndex); // 3

// 9. includes() - Checks if an element exists
//True or false
// Syntax: array.includes(searchElement, fromIndex)

let isAppleExist=fruites.includes('apple');
console.log("Does fruites include apple?",isAppleExist ); //false


let isBananaExist=fruites.includes('banana');
console.log("Does fruites include apple?",isBananaExist ); //true

// 10. toString() - Converts array to string
// Syntax: array.toString()

console.log(numbers);   //[ 2, 3, 4, 5, 6, 7 ]

let numbersString = numbers.toString();
console.log("Converted Array To String: ", numbersString);
// 2,3,4,5,6,7

let myarray: string[] = ['w','e','l','c','o','m','e'];
console.log("Original myarray: ", myarray);