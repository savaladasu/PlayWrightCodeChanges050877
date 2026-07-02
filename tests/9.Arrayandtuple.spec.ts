import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {

/* //Example 1: Iterating over an array using a traditional for loop

let empIds: Array<number> = [101, 102, 103, 104];

for(let i=0; i < empIds.length; i++) {

console.log (empIds[i]);
} */

// Example: 2 Find Sum of Array Elements

/* let empIds: Array<number> = [101, 102, 103, 104];
let sum = 0

for(let i=0; i < empIds.length; i++) {

sum = sum + empIds[i]
}

console.log ("total sum", sum);
 */

// Example 3: Find Largest Number in an Array

/* let numbers: number[] = [25, 10, 45, 30, 60];
let Max = numbers[0]

for (let i = 1; i < numbers.length; i++){

    if (numbers[i] > Max)
        Max = numbers[i]
}
console.log ("Print Max value",Max) */

// Example 4: Find smallest Number in an Array

/* let numbers: number[] = [25, 10, 45, 30, 60];
let Min = numbers[0]

for (let i = 1; i < numbers.length; i++){

    if (numbers[i] < Min)
        Min = numbers[i]
}

console.log ("Print Min value",Min) */

// Example 5: Count Even and Odd Numbers

/* let numbers:number [] = [20, 45, 60, 90, 100]
let Even = 0
let Odd = 0 

for (let i = 0;  i < numbers.length; i++){

if (numbers[i] % 2 ===0){

    Even++
}
else {

    Odd++
}
}

console.log("Even Count =", Even);
console.log("Odd Count =", Odd); */

// Example 6: Reverse an Array

/* let numbers:number [] = [20, 45, 60, 90, 100]

for (let i = numbers.length-1; i >= 0; i--){

console.log (numbers[i])
} */

// Example 7: Search an Element in an Array

/* let numbers:number [] = [20, 45, 60, 90, 100]
let search =100
let found = false

for (let i = 0; i < numbers.length ; i++){

    if (numbers [i] === search){
        found:true
        break;
} 
}
console.log (found ? "Element Found" : "Element Not Found"); */
// ===============================================================================
// Iterating using the 'for...in' loop (indexes)

// Example 8: find the the index values

/* let EmpId:number[] = [101,202,404]

for (let i in EmpId){
console.log(EmpId[i])
} */

// Example 9: for in and for of loop

/* let fruits: string[] = ["Apple", "Orange", "Bannana"]

for (let i in fruits){

console.log ("for ....in", i)
}

 for (let value of fruits){

  console.log ("for ....of", value)  
 } */
// ==============================================================================================
//  Passing an Array to the function
//// Example:10 Search an element in a n array using function

/* let arr: number[] = [20, 30, 40, 50];

function search(ele: number, arr: number[]): boolean {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === ele) {
            return true;
        }
    }

    return false;
}

console.log(search(30, arr)); */

// ==================================================================================

/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 */
/* 
//Example 1 : tuple with 2 values of string, number

 let person:[string , number] = ["Srinivasu",38]
 console.log (person[0])
 console.log (person[1])
 console.log (person)


//Example 2: Tuple with multiple values

 let person1:[String,number,boolean] = ["Srinivsau", 38, true]

 // Example 3: Iterating over a tuple using a traditional for loop

 console.log ("Tuple with traditional for loop.....")

  let user :[String,number,boolean] = ["Srinivsau", 38, true]

  for (let i=0; i < user.length; i ++){
  console.log (user[i])

  }

// Example 4: Iterating using a 'for...in' loop (index-based iteration)

 console.log ("Tuple with 'for...in' loop.....")

  let user1 :[String,number,boolean] = ["Srinivsau", 38, true]

  for (let i in user1){
  console.log (user1[i])

  }

//Example 5: Iterating using a 'for...of' loop (value-based iteration)

 console.log ("Tuple with 'for...of' loop .....")

  let user2 :[String,number,boolean] = ["Srinivsau", 38, true]

  for (let value of user2){
  console.log (value)

  }
 */
// Example 6: Tuple Array (Array of Tuples)

let students: [number, string][] = [[101, "John"], [102, "Peter"], [103, "Scott"]];
console.log(students.length)
console.log(students[0])
console.log(students[1])
console.log(students[2])

// further validations

let tp = students[0]
console.log (tp[0])
console.log (tp[1])

});