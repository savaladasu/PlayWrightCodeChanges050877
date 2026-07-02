// while loop statment 
// Syntax
/* while (condition) {
    // code block
} */

import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {    

// Example 1: Print Numbers from 1 to 10

/* let i: number = 1;

while (i <= 10) {
    console.log(i);
    i++;
} */

// Example 2: Print Even Numbers from 1 to 20

/* let i:number = 2;

while (i <= 20) {
console.log (i);
  i = i+2
} */

// Example 3: Find Sum of Numbers from 1 to 10

/* let i:number = 1
let sum:number = 0

while (i <= 10){

 sum = sum+i;
 i = i+1;
 console.log("sum=", sum )
} */

//  Example 4: Reverse Countdown

/* let i: number = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
 */
//  Example 5: Find Factorial of a Number of 5

/* let num:number = 5
let fact:number = 1
while (num > 0){

fact = fact * num;  //5
num--;  //4
}
console.log(fact) */

// example 6: Check Password Until Correct

/* let password = "admin123";
let enteredPassword = "test";

while (enteredPassword !== password) {
    console.log("Invalid Password");

    // Simulating next attempt
    enteredPassword = password;
}
console.log("Login Successful"); */

// Example 7: Print Multiplication Table for 5

/* let sum : number = 5;
let i:number = 1
while (i <= 10){
console.log (`${sum} x ${i} = ${sum*i}`);
i++;
}
 */
// Example 8: ATM Balance Check Scenario

/* let Balance:number = 5000;
let Withdrwal:number = 1000

while(Balance >= Withdrwal ){

Balance = Balance-Withdrwal    
console.log("Remaing amout =",Balance) 

}*/
// =================================================================================
// do-while loop statement
// A do...while loop executes the block at least once, even if the condition is false.

/* Syntax: 

do {
    // code
} while (condition); */

// Example 1: Login Attempt Validation

/* let attempts:number = 1

do {
console.log ( `"login attempt", ${attempts}`);
attempts ++
}
while (attempts <= 3) */

// Example 2: Retry API Call

/* let Retry:number = 1

do {
console.log ( `"Retry API call", ${Retry}`);
Retry ++
}
while (Retry <= 5) */

// Example 3: Countdown Timer

/* let count = 5
do{ 
console.log(count);
count--
 }
 while (count > 0) */

// Example 4: Execute Once Even if Condition is False

let i = 10

do {
console.log(i)
}
while (i<0)    
// =====================================================================================================================
// for loop :A for loop is used when the number of iterations is known. 
// It consists of three parts: initialization, condition, and increment/decrement.

// Syntax

/* for (initialization; condition; increment/decrement) {
    // code to execute
} */

// Example 1: Increment by 1

/* for (i = 0; i <= 10; i++ )
{ 

console.log (i)
} */

// Example 2: Decrement by 1

/* for (i = 10;  i >= 1; i-- ){
console.log (i)
} */

// Increment by 2

for (i = 1; i <= 10; i = i+2){
console.log(i);
}

}); 
