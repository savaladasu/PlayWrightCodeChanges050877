// 1. Conditional statement (if, if and else, and if-else, if)

/*=====================================================================================================
Syntex: 

if(condition)

{
    // statements
}

Example 1:
If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.

let age: number = 20;

if (age >= 18)
{
    console.log("You are eligible for vote");
}
=====================================================================================================
if else condition

Syntex:

if(condition)

{
    // statements1
}
else

    { 
    
    // statements2
     
    }
    
Example: 2

Print number is even or odd

let num: number = 10;

if (num % 2 == 0)
{
    console.log(`${num} Even number`); //if we use backlit operater, we can pass the parameter)
}
else
{
    console.log(`${num} Odd number`);
}

=====================================================================================================
Nested if-else (if - else if - else) syntax in TypeScript.

Syntex: 

if (condition1)
{
    // statements
}
else if (condition2)
{
    // statements
}
else if (condition3)
{
    // statements
}
else
{
    // statements
}



Example 3: Depending on the marks, display appropriate grade.

let marks: number = 50;

if (marks >= 90 && marks <= 100)
{
    console.log("Grade A");
}
else if (marks >= 75 && marks < 90)
{
    console.log("Grade B");
}
else if (marks >= 60 && marks < 75)
{
    console.log("Grade C");
}
else
{
    console.log("Grade D");
}

Example 4: Browser selection

let browser: string = "firefox";

if (browser === "chrome")
{
    console.log("Browser is chrome");
}
else if (browser === "firefox")
{
    console.log("Browser is firefox");
}
else if (browser === "safari")
{
    console.log("Browser is safari");
}
else
{
    console.log("Other browser");
}

=============================================================================
Switch case stagtment: Use switch-case when a single variable needs to be compared against multiple fixed values. It improves readability, reduces repetitive code, and is easier to maintain than a long if-else if chain. 
Use if-else for complex conditions, ranges, and logical expressions.

Commonly used for:

Browser selection
Day of week
Month names
Menu-driven programs

if elase statement used for for complex conditions, ranges, and logical expressions (ex: >, <, &&, or ||.).

Expression	                                                     Condition
Produces a value (anything).	                          Produces true or false.
Can be arithmetic, string, logical, etc.	              Used for decision making in if, while, etc.
Example: 10 + 5 → 15	                                  Example: 10 > 5 → true

Syntex:
switch (expression)
{
    case value1:
        statements;
        break;

    case value2:
        statements;
        break;

    case value3:
        statements;
        break;

    default:
        statements;
}

Example 5 

let day: number = 3;

switch (day)
{
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
        console.log("Invalid day");
}

Example 6: The switch statement can also include an expression

let x: number = 20,
    y: number = 5;

switch (x - y)
{
    case 0:
        console.log("Result Zero");
        break;

    case 5:
        console.log("Result is Five");
        break;

    case 10:
        console.log("Result is Ten");
        break;

    default:
        console.log("Result is something else");
*/

