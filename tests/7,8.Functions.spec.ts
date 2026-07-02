import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {

//1.  Named Function: A function that is declared with a name.

/* Syntax

function functionName(parameter): returnType
{
    // block of code
}

functionName();   // calling the function/invoking the function
*/

// Example 1: : Add Two Numbers

/* function addnumbers (num:number,num1:number):number {

   return (num + num1);
}

console.log(addnumbers(10,20));
 */
// Example 2: Check Even or Odd

/* function Oddcheck (num: number):void {

if(num % 2 === 0){
console.log ("provided number is even");
}
else{
console.log ("provided number is odd");   
}}

Oddcheck(10);


 */

// Example 3: Find Largest Number

/* function Largestnum (a:number, b: number):number {
return a > b ? a : b; 
}

console.log (Largestnum (20,10));
 */
// ===========================================================================================

// Named Function with no parameters and no return type

// Example 1 : Simple Logging Functions

/* function displaywelcomemessage():void{
console.log ("welcome to the main application" );
}
displaywelcomemessage(); */

// Example 2: Event Handlers

/* function showalert ():void{

    alert(" button was clicked !")
}
showalert(); */
// ==============================================================================================================
// Named function with parameters and return type


// Example 1: : Add Two Numbers

/* function addnumbers (num:number,num1:number):number {

   return (num + num1);
}

console.log(addnumbers(10,20));
 */
// Example 2: Check Even or Odd

/* function Oddcheck (num: number):void {

if(num % 2 === 0){
console.log ("provided number is even");
}
else{
console.log ("provided number is odd");   
}}

Oddcheck(10);


 */

// Example 3: Find Largest Number

/* function Largestnum (a:number, b: number):number {
return a > b ? a : b; 
}

console.log (Largestnum (20,10));
 */

// ===========================================================================================
//Named function with Rest parameters
// Example 1: add numbers

/* function addnum(...num: number[]) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    console.log("Final Sum =", sum);
}

addnum(20, 30, 70); */
// Example 2: Named function with Rest parameters - multiple types

/* function findelementtypes (...elements:(String | number)[] ){

console.log (elements.length)

}

findelementtypes ("elements length is", 20,"John",20,20)
findelementtypes ("elements length is", 20,"John",)
findelementtypes ("elements length is", 20) */

// Example 3: Sum of Numbers

/* let sum = 0

function sumofnumbers (...num:number[]){

for (let nums of num ) {

  sum = sum + nums
}
console.log("Total Amount =",sum)
}
sumofnumbers(20,30,40)
 */
// Example 4: Find Maximum Number

/* function findMax(...scores: number[]): void {
    let max = scores[0];

    for (let score of scores) {
        if (score > max) {
            max = score;
        }
    }

    console.log("Highest Score =", max);
}

findMax(78, 92, 85, 99, 88); */

// ==============================================================================================
// Named function with Optional Parameters

/* function EmployeeDetails (Name:string, Department ?:string ):void{
console.log ("Employee Name is", Name )
if(Department){
console.log ("Dapartment Name is", Department)
} 
else 
{
console.log ("Department name is not available")
}}
EmployeeDetails("vasu");
EmployeeDetails("Ravi","Eng");
 */
// ==========================================================================================
// Named function with Default Parameters

// Exaple:1: 

/* function EmployeRole( Name : string, Role: string = "QA" ):void {

console.log ("employee Name is", Name);
console.log ("Role Name is", Role)

}

EmployeRole("Ravi");
EmployeRole("vasu","Dev")
 */

// Example 2: Discount Calculator

/* function Discount(Price:number, Discount:number = 0.05):void{

let DiscountedPrice = Price * Discount

console.log("Discounted Price is", DiscountedPrice,"%"  );
}

Discount(100)
Discount(100,0.03) */

//  Example: 3

/* function createUser(
    username: string,
    role: string = "User",
    active: boolean = true
): void {
    console.log("Username:", username);
    console.log("Role:", role);
    console.log("Active:", active);
}

createUser("Srinivas");
createUser("Ravi", "Admin");
createUser("John", "Manager", false);*/
// =============================================================================================
// An anonymous function is a function that does not have a name.Instead, it is assigned to a variable, which acts as its name.

/* Syntax:

let variable = function(parameters)
{
    // function body
};

variable(); // Calling the function
 */

// Example 1: 

/* let greet = function(Name:string):void{

console.log (`Welcome on board ${Name}`)    
}

greet("srinivasu")
 */

// Example 2: Multiplication

/* let Multi = function(x:number,y:number):void {

console.log (x*y);
}
Multi(10,20)
 */
// ===================================================================================

//Arrow Functions / Lambda Function

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

// Example:1 simple greet message with out parameters 

/* let greets = ():void => {

console.log("Hello world")
}
greets()

// Example 2: Multiplication with parameters

let Multi = (a:number, b:number):void => {

console.log(a*b)

}

Multi(10,20);

 */

// Example 3: Arrow Function with Parameters and a Return Type

/*  let Add = (a:number,b:number):number => {

    return a+b
 }
   console.log (Add (20,30)) */

// Example 4: Arrow Function with implicit return
// if you only one return in the blok statement, no need to apply curl braces and  retun statement. 

/*  let Add = (a:number,b:number):number =>  a+b
 let Multi = (a:number,b:number):number =>  a*b
  console.log(Add (20,30))
  console.log(Multi(20,30)) */

//Example 5: Arrow Function with Optional Parameters

/* let optionalParameters = (name:string,Email?:string,age:number):void =>{

console.log ("Name is", name )
console.log (" Age is", age)

if (Email != undefined){

    console.log ("EmailID is",Email  )
}
}
optionalParameters("Srinivasu","", 30);
// optionalParameters("Srinivasu", "Vasu@gmail.com", 30) */

// Example 6 : Arrow Function with Default Parameters

/* let totalprice = (price:number, discount:number = 0.05 ):void =>{

let result:number = price * discount 

console.log ("total price is", result)

}
totalprice(100,0.05)
totalprice(1000) */

// Example 7 :  Arrow Function with rest Parameters

let findelements = (...elements:(number|string)[]):number => {

return elements.length

}
console.log (findelements ("John", 100, 20,40,"ravi"))
// ==============================================================================
// call back function: 
// A callback function is a function passed as an argument to another function, 
// which is invoked after a specific task is completed.
// Advantage:
/* 1. Execute code after another task finishes.
   2. Reuse functions.
   3. Handle asynchronous operations. */

// example 1: 

/* function abc (a:number,b:number,callback:any) // arugument
{
console.log(a+b)
callback()}

function xyz ()  {

}

abc(10,20,xyz) // parameters
 */
// example 2: Function that takes callback function as a parameter

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

// ====================================================================================
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

