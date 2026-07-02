// A function/sub routine is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you can put it inside a function and call it whenever needed.
// Syntax:

/* function functionName() {
    // code to execute
} */

/* Types of functionals

1. Function Declaration
2. Function Expression
3. Arrow Function
4. Anonymous Function
5. Functions with Parameters
6. Optional Parameter Functions
7. Default Parameter Functions
8. Rest Parameter Functions
9. Recursive Functions */

//  Difference Between Function and Method in TypeScript
Function	                                              Method

A standalone block of code.	               A function that belongs to an object or class.
Can be called directly by its name.	       Called using the object/class name.
Exists independently.	                   Exists inside an object or class.
Reusable for general tasks.	               Usually operates on the object's data.
// ========================================================================================================

// Named Function: A function that is declared with a name.

/* Syntax

function functionName(parameter): returnType
{
    // block of code
}

functionName();   // calling the function/invoking the function
*/


// Example 1: Named Function with no parameters and no return type

/* function display(): void
{
    console.log("Welcome to typescript");
}

display();    // calling function */

// Example 2: Named function with parameters and return type

/* function addNumbers(x: number, y: number): number // x:numbers,y:number -called arguments
{
    return x + y;
}

// let res: number = addNumbers(2,3);
// console.log(res);

console.log(addNumbers(2,3));    // 2,3 are called parameters
console.log(addNumbers(1,2,3));  // Compile-time Error */
//==============================================================================================
// Example 3: Named function with Rest parameters
// Rest parameters don't restrict the number of values that you can pass to a function.

/* function addNumbers(...nums: number[])
{
    let i;
    let sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    console.log("sum of the numbers", sum);
}

addNumbers(1, 2);
addNumbers(1, 2, 3);
addNumbers(10, 20, 30, 40, 50);
 */

// Example 4: Named function with Rest parameters - multiple types

/*
function findElements(...elements:(number | string)[]): number
{
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott")); // 5
console.log(findElements(10,20,30,40,50,60,70));     // 7
console.log(findElements("abc", "xyz"));             // 2
*/
// ================================================================================================================
// Example 5: Named function with Optional Parameters

/* function displayDetails(id: number, name: string, mailId ?: string): void
{
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Email:", mailId);
}

//displayDetails(123, "Scott", "scot@gmail.com");
//displayDetails(123, "Scott");     // out is undefind for mailid */

// Example 5: Named function with Optional Parameters (to avoid undefind in output, here is the logic for the above example)

/* function displayDetails(id: number, name: string, mailId ?: string): void
{
    console.log("ID:", id);
    console.log("Name:", name);

    if(mailId !==undefined ) {
    console.log("Email:", mailId);
    }  
}
 */
//displayDetails(123, "Scott", "scot@gmail.com");
//displayDetails(123, "Scott");    

// =======================================================================================
// Example 6: Named function with Default Parameters

/* function calculateDiscount(price: number, rate: number = 0.50): void
{
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
} */

//calculateDiscount(1000, 0.30);
//calculateDiscount(1000);
// ===============================================================================================
// Anonymous Function (Unnamed Function/Nameless Function)

/*

An anonymous function is a function that does not have a name.
Instead, it is assigned to a variable, which acts as its name.

Syntax:

let variable = function(parameters)
{
    // function body
};

variable(); // Calling the function

*/

// Example 1: Anonymous function

/*
let msg = function(): string
{
    return "Hello TypeScript";
}

console.log(msg());
*/

// Example 2: Anonymous Function with Parameters

/* let multiply = function(a: number, b: number): number
{
    return a * b;
}

console.log(multiply(10, 20)); */

// we can try similar functions like default, rest and optonal paramertes. 

//=================================================================================================

//// Arrow Functions / Lambda Function

/*
Lambda refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called Arrow functions.

There are 3 parts to a Lambda function.

1. Parameters - A function may optionally have parameters
2. The fat arrow notation/lambda notation (=>) - It is also called as the goes to operator
3. Statements - represent the function's instruction set

Syntax:

let variable = (parameters) =>
{
    // block of code
}

variable();

*/

// Example 1: Arrow Function with No Parameters and No Return Type

/*
let greet = (): void =>
{
    console.log("Hello TypeScript");
}

greet();
*/

// Example 2: Arrow Function with Parameters and a Return Type

/* let add = (a: number, b: number): number =>
{
    return a + b;
}

console.log(add(10, 20)); */

// Example 3: Arrow Function with implicit return
// if you only one return in the blok statement, no need to apply curl braces and  retun statement. 

/* let add = (a: number, b: number): number => a + b;
let multi= (a: number, b: number): number => a * b;

console.log (add(10,20));
console.log (multi(20,30)); */

// Example 4: Arrow Function with Optional Parameters

/* let displayDetails = (id: number,name: string,mailId?: string): void =>
{
    console.log("ID:", id);
    console.log("Name:", name)
    if (mailId != undefined)
    {
        console.log("Email:", mailId);
    }
}

displayDetails(123, "Scott", "scot@gmail.com");
displayDetails(123, "Scott");
 */

// Example 5: Arrow Function with Default Parameters

/* let calculateDiscount = (
    price: number,
    rate: number = 0.50
): void =>
{
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
}

calculateDiscount(1000, 0.30);
calculateDiscount(1000); */

// Example 5: Arrow Function with rest Parameters

/* let findElements(...elements:(number | string)[]): number =>
{
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott")); // 5
console.log(findElements(10,20,30,40,50,60,70));     // 7
console.log(findElements("abc", "xyz"));             // 2 */

// ==============================================================================================================
// call back function: 
// A callback function is a function passed as an argument to another function, 
// which is invoked after a specific task is completed.
// Advantage:
/* 1. Execute code after another task finishes.
   2. Reuse functions.
   3. Handle asynchronous operations. */

/* function abc(a: number, b: number, callback: any) // Arguments
{
    console.log(a + b);
    callback();
}

// callback function

function xyz()
{
    
}

abc(10, 20, xyz);   // parameters */

// Example 1: 

// Function that takes callback function as a parameter

/* function greet(name: string,callback: (message: string) => void)
{
    console.log(name);
    callback("Hello");   // executing the callback function
}

// callback function

function showMessage(message: string)
{
    console.log(message);
}

// calling the function by passing the callback function

greet("John", showMessage); */

//Example 2

/* function sum(a:number,b:number,callback:(result:number)=>void)
{
    let result=a+b;
    callback(result);
}

//callback function
function displayResult(result:number):void
{
    console.log(result);
}

sum(10,20,displayResult);
 */
// =============================================================================================
/* Function Overloading in TypeScript
   Function overloading allows you to define multiple versions of a function with the same name but different parameters or return types.

   Why Use Function Overloading?
   Helps create functions that work differently based on input types.

   Improves code readability and reusability.

   Basic Rules for Function Overloading
   1. Define Overload Signatures: List all possible ways the function can be called.

   2. Single Implementation Signature: There must be one actual function implementation that handles all cases.

   3. Ensure Compatibility: The implementation must be compatible with all overload signatures. */

//step1: write a signatures of functions
//step2: implement a function
//step3: calling function

//Example1: Different parameter Types(data types)

/* function getInfo(id:number):string;    //Signature
function getInfo(name:string):string;  //Signature

function getInfo(param: number|string):string
{
   if(typeof param==="number")
{
    return (`User ID is ${param}`);
}
else
{
     return (`User Name is ${param}`);
}}

getInfo(100); //calling function
getInfo("John"); // calling function  */

//Example 2: Different Number of Parameters

/* function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

function add(a:number, b:number, c?:number):number
{
if(c===undefined)
{
return a+b;
}
else{
return a+b+c;
}}

console.log (add(10,20,30)) //function is returing the number/value so we have to use console.log
console.log (add(10,20)) */

//Example 3: Different teturn types

/* function processInput(input:string):string;
function processInput(input:number):number;

function processInput(input :string | number): string | number

{
if(typeof input==="string")
{
return input.toUpperCase();
}
else
{
return input*2;
}}

console.log(processInput("welcome"));
console.log(processInput(5)); */

//Example 4: Different parameters

/* function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value:string |number|boolean):string
{
if(typeof value==="string")
{
return `Hello ${value}`;
}
else if(typeof value==="number")
{
return `You are ${value} years old`;
}
else
{
let res:string= value?"married":"single";
return res;
}}

console.log (greet("John"));
console.log (greet(30));
console.log (greet(true));
console.log (greet(false)); */

