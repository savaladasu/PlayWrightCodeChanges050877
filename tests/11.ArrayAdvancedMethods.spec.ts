import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {

// 1. forEach() - Executes a function once for each array element
// It takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array (optional) - The array the current element belongs to.

// Ex1: Get index of all the fruits along with value.
// Arrow function

/*  let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

    fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);

 });
  */
/*  // Ex 2 Print all elements in uppercase characters

  let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

    fruits.forEach((element) => {
    console.log(element.toUpperCase());

 });
 */

//  Ex3: caliculate the sum of elements in a given array

/*     let numbers:number [] = [1,2,3,4,5]
    let sum = 0

    numbers.forEach((element) =>{

    return sum=sum + element

    })

    console.log ("sum of result", sum) */

//  =====================================================================================================
// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})


// Ex1: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

 /*   let numbers:number [] = [1,2,3]

  let Result = numbers.map((elements) =>{

   return elements * elements

   }); 
   
  console.log (Result)
 */

// Ex2: Double each number [1,2,3,4,5] ---> [2,4,6,8,10] 
   
 /*    let numbers:number [] = [1,2,3,4,5]

    let squareNum = numbers.map((elements) =>{
     
    return(elements*2)
     
    });

    console.log(squareNum) */

// ===============================================================================================

// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array){})

// Ex1: Get the only even numbers from an array 
   
/*    let Num:number[] = [1,2,3,4,5,6]
    
   let EvenNum = Num.filter((elements)=>{

   return (elements%2 ===0)

   });

   console.log(EvenNum); */
   
// Ex2: Get the only numbers greater than 3 from an array

/*    let Num:number[] = [1,2,3,4,5,6]
    
   let Greaterthanthree = Num.filter((elements)=>{

   return (elements > 3)

   });

   console.log(Greaterthanthree); 
 */

// Filter Names Starting with "A"

/* let names: string[] = ["Anil", "Vasu", "Ajay", "Ravi", "Arun"];

let filteredNames = names.filter(name => name.startsWith("A"));

console.log(filteredNames); */

// ===============================================================================================
// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed


//Ex1: Get the total (sum) of all the elements in an array

/*   let Numbers:number [] = [1,2,3,4,5]
  let sum = 0

  let NewArray = Numbers.reduce((sum,elements)=>{

  return (sum = sum + elements)

  },0)
  
  console.log (NewArray) */


// Ex 2 Find Maximum Number

/*  let Numbers:number [] = [1,2,3,4,5]
  
 let Max = Numbers.reduce((Max,elements)=>{

  return Max > elements ? Max : elements

  })
  
  console.log (Max) 
 */
// =====================================================================================================================
// 5. some() - Checks if any element satisfies a condition

// Returns true if at least one element passes the condition, else false
// Syntax: array.some(function(currentValue, index, array){})


//Ex1: Check array contains negative values

/*   let numbers:number [] = [-1,2,3,4]
   
 let NegNum =  numbers.some((elements)=>{

  return elements < 0

  })

console.log (NegNum)

// Ex 2 Check if a Name Exists

let names: string[] = ["Vasu", "Ravi", "Kiran"];

let exists = names.some(name => name === "Ravi");

console.log(exists); */

// Ex3: Employee Salary Check (greater than 50000)

interface Employee {Name:String;Salary:number;}

let Employee:any [] = [{Name:'Vasu', Salary:45000}, {Name:'Srini', Salary:50000},{Name:'Daiwik', Salary:20000}]

let MaxSalary = Employee.some((elements) => {

 return elements.Salary > 50000 
})

console.log (MaxSalary)

// =======================================================================================================

// 6. every() - Checks if all elements satisfy a condition

// Returns true if all elements pass the condition, else false
// Syntax: array.every(function(currentValue, index, array){})


//Ex1:
let allEven = numbers.every((element) => element % 2 == 0);
console.log("Are all numbers are even?", allEven); // false


//Ex2:
let allGreaterThanOne = numbers.every((element) => element >= 1); // Note: Instructor's log asks "greater than one" but code checks greater than or equal to 1
console.log("Are all the numbers greater than one?", allGreaterThanOne); // true

// Ex3 Check Student Pass Status

let marks: number[] = [60, 75, 80, 50];

let allPassed = marks.every(mark => mark >= 35);

console.log(allPassed);

 });

