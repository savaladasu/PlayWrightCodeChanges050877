
import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {

//  if,if-elase statement examples

// Example 1: Check String Length

    /* let Sname: string = "Srinivas";

    if (Sname.length > 5) {
        console.log("Long Name");
    } else {
        console.log("Short Name");
    } */

 // Example 2: Check Array is Empty

/*  let Sarray:string []= [];

if (Sarray.length===0){
 console.log("Array is empty");
}
 else {("Array is not empty")}; */

// Example 3: Check Number is Divisible by 5 and 3

/* let number1:number = 15;
if (number1 % 3 ===0&& number1 % 5 ===0){
 console.log("number 15 is divided by 5 and 3")
}
else {
 console.log("number 15 isnot divided by 3 and 5");
} */

 // Example 4: Check Student Pass or Fail

/*  let marks: number = 40;

if (marks >= 35) {
    console.log("Student is pass");
} else {
    console.log("Student is fail");
} */

// Example 5: Check Positive or Negative Number

/* let num2:number = 10

if (num2 > 0) {
console.log ("provivded number is positive");
}
else {

console.log ("Provide number is negtive");}
*/

//Example 6: Check Even or Odd (if-else)

/* let number3:number = 10;
if ( number3 % 2 ===0 ) {
console.log ("number is even");
 
} else {
console.log ("number is odd");
} */

//Example 7: Check Voting Eligibility

/* let age:number = 20
if(age >= 18)
{
console.log ("voter is eligible for voting");
}
else {
console.log (" voter is not eligible for vote");
 } */

// Example 8: Check Leap Year

/* let LeapYear:number = 2025
if(LeapYear % 4 ===0 && LeapYear % 400 ===0 && LeapYear % 100!==0)
{
console.log (" is a leap year")
} 
else{
 console.log(" is not leap year");
} */

// Exaple 9: Check Username and Password

/* let username:string = "Srinivasu";
let pwd:string = "admin124";
if (username === "Srinivasu"&& pwd === "admin124"){
console.log ("Login to appliation");
}
else{
console.log("Not login to appliction");
} */
// =================================================================================================================
//  if-else-if Condition
// Example 10: Handle different user roles.

/* let role: string = "Manager";

if (role === "Admin") {
    console.log("Access to all modules");
}
else if (role === "Manager") {
    console.log("Access to Reports and Team Management");
}
else if (role === "Employee") {
    console.log("Access to assigned tasks");
}
else if (role === "Guest") {
    console.log("Read-only access");
}
else {
    console.log("Invalid role");
} */

// Example 11: Validate which page is opened.
// Example 12: Verify current environment.

/* const currentUrl = page.url();

if (currentUrl.includes("dev")) {
    console.log("Running in DEV environment");
}
else if (currentUrl.includes("qa")) {
    console.log("Running in QA environment");
}
else if (currentUrl.includes("uat")) {
    console.log("Running in UAT environment");
}
else if (currentUrl.includes("prod")) {
    console.log("Running in Production environment");
}
else {
    console.log("Unknown environment");
}
 */
// Example 13: Run specific steps for different browsers.
// Example 14: Student Grade Calculator

/* let SMarks:number = 39 ;

if (SMarks >= 90 ){
console.log("Grand A");
}
else if(SMarks <= 89 && SMarks >= 60){
console.log ("Grand B") ;  
}
else if(SMarks <= 59 && SMarks >= 40){
console.log ("Grade C")    
} else if(SMarks <= 39){
console.log("Fail")
} */

// Example 15: Age Category

/* let Sage:number = 45;
if (Sage <= 13){
console.log ("Child");
}
else if(Sage <= 20){
console.log ("Teeneger");   
}
else if(Sage <= 50){
console.log ("Adult");  
}
else{
console.log (" Senior Citizen");
} */

// Example 16: Largest of Three Numbers
   
/* let a:number = 50;
let b:number = 80;
let c:number = 100;

if (a > b && a >c){
console.log (" A is larger");
}
else if (b > a && b > c){
console.log("b is larger");
}
else { 
console.log ("c is larger"); } */

// Example 17: Login Validation

/* let Username:string = "Srini";
let pwd:String = "admin1234";
if (Username === "Srini" && pwd === "admin1234"){
console.log ("Userid and pwd are correct");
}
else if (Username != "Srini"){
console.log ("userid is not correct");
}
else{
console.log ("pwd is not correct");
} */

// Example 18: Employee Bonus Calculation

/*  let Experiance:number = 1
 if (Experiance >= 10){
console.log ("Bonus is 20% applicable");
 }
 else if (Experiance < 10 && Experiance >= 5){
console.log ("Bonus is 10% applicable");
}
else if (Experiance < 4 && Experiance >= 2){
console.log ("Bonus is 5% applicable");
 }
else{
console.log ("no Bonus") 
} */

//Exaple 19: Traffic Signal 

/* let TrafficSingnal : string = "Yellow"
if (TrafficSingnal === "Red"){
console.log("Stop");
}
else if (TrafficSingnal === "Yellow"){
console.log ("Ready");}
else if (TrafficSingnal ==="Green"){
console.log ("Go")
} 
else {
console.log ("No signal")
} */

//Example 20: Browser Selection  

/* let Browser : string = " "
if (Browser === "Chrome"){
console.log("Launching Chrome");
}
else if (Browser === "Firefox"){
console.log ("RLaunching Firefox");}
else if (Browser ==="Webkit"){
console.log ("Launching Webkit")
} 
else {
console.log ("Browser is not availabe")
} */

// =================================================================================================================
// Switch case statment

/* Example1:  User Role Validation
   Admin - Full Access
   Manager - Limited Access
   User - Basic Access
   default - Invalid Role
*/

/* let role:string = "Admin"

switch(role){

case "Admin": 
console.log ("Full Access"); 
break;

case "Manager":
console.log("Limited Access");
break;

case "User":
console.log("Basic Access");
break;

default:
console.log ("Invalid Role");

} */

// Example2:  Browser Validation

/* let browser:string = "Chrome";

switch(browser){

case "Chrome":
console.log ("Launching chrome");
break;

case "Firefox":
console.log ("Launching Firefox");
break;

case "Webkit":
console.log ("Launching Webkit");
break;

default:
console.log("none of the browser is not available")

} */

// Example3: Environment Verification

/* let Env:string = " ";

switch(Env){

case "Dev":
console.log ("Running in Dev env");
break;

case "QA":
console.log ("Running in QA env");
break;

case "Stage":
console.log ("Running in Stage env");
break;

default:
console.log("Running in production env")
} */

// Example4: Day of Week

/* let Day:number = 3

switch(Day){

case 1:
console.log("Monday");
break;

case 2:
console.log("Tuesday");
break;

case 3:
console.log("Wednesday");
break;

case 4:
console.log("Thursday");
break;

case 5:
console.log("Friday");
break;

case 6:
console.log("Saturday");
break;

case 7:
console.log("Sunday");
break;

default:
console.log("none of the day")
} */

//Example5: API Response Code Handling

/* let statusCode: number = 404;

switch (statusCode) {
    case 200:
        console.log("Success");
        break;

    case 201:
        console.log("Created");
        break;

    case 400:
        console.log("Bad Request");
        break;

    case 404:
        console.log("Resource Not Found");
        break;

    case 500:
        console.log("Server Error");
        break;

    default:
        console.log("Unknown Status");
}
 */
// Example6: Grade Calculation

/* let grade: string = "A";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    default:
        console.log("Needs Improvement");
} */
// =================================================================================================================================
// Ternary Operator (? :)
// A shorthand way of writing simple if...else conditions.
// Example1: Check Pass or Fail

/* let marks:number = 35;

let results = marks >= 35 ? "Pass" : "Fail";

console.log(results) */

// Example2: Check Even or Odd

/* let num1: number = 10;
let results = 10 % 2 ===0 ? "Even" : "Odd";
console.log (results); */

// Example3: Check Voting Eligibility

/* let age:number = 20;
let results = age >= 18 ? "Eligible" : "not Eligible" ;
console.log (results); */

// Example4: Check Positive or Negative

/* let num1:number = -1;
let results = num1 >= 0 ? "Positive" : "Negative" ;
console.log (results);
 */

// Example5:Browser Validation (Playwright Interview)

let browser1:string = "chrome";
let type = browser1 === "chrome" ? "Launching chrome browser" : "chrome browser is not available";
console.log(type);

// Example6:Environment Check

/* let env: String = "QA1";

let Envtype = env === "QA" ? "Launching QA enviroment" : "Launching prod environmnet";
console.log(Envtype); */

}); 
 


