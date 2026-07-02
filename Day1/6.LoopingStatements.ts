 /*while, do-while and for loop 
 
while loop : A while loop executes as long as the condition is true.

while(condition)
{
    statements;
}


Example1: print 1......10

let i:number = 1;   //Initialization

while(i<=5)    //t t t t f
{
    console.log(i);  //1 2 3 4 5
    i++;             //2 3 4 5 6
}
 
Example 2: print even numbers 1.....10

Method1

let i:number = 2;

while(i<=10)
{
    console.log(i);
    i+=2;   // i=i+2;
}

Method2:

let i:number = 1;

while(i<=10)
{
    if(i%2==0)
    {
        console.log(i);
    }

    i++;
}
 
Example 3: print odd numbers 1.....10

Method1:

let i:number = 1;

while(i<=10)
{
    console.log(i);
    i+=2;   // i=i+2;
}

Method2:

let i:number = 1;

while(i<=10)
{
    if(i%2!=0)
    {
        console.log(i);
    }

    i++;
}

Example 4: print numbers 10 9 8 ......1

let i:number = 10;

while(i>=1)
{
    console.log(i);
    i--;
}

infinite loop - when the condition never become false then it will go to infinite loop

/*while(true)
{
    console.log(1);
}

===============================================================================================================================================================
do-while loop : A do-while loop always executes at least once before checking the condition.

Syntax:

do
{
    // statements;
}
while(condition);

Example 1: 1....5

let i:number = 1;

do
{
    console.log(i);
    i++;
}
while(i<=5);
===================================================================================================================================
 For Loop: A for loop is typically used when the number of iterations is known beforehand.

Syntax
for(initialization; condition; inc/dec)
{
    // statements;
}

For Loop Workflow

1. Initialization
        ↓
2. Condition Check
        ↓
   True ? ── No ──► Exit Loop
        │
       Yes
        ↓
3. Execute Statements
        ↓
4. Increment / Decrement
        ↓
   Go back to Step 2

Example1:

for(let i = 1; i <= 5; i++)
{
    console.log(i);
}

Example 2: print even numbers between 1---10

// Method1:
for(let i=2; i<=10; i+=2)
{
    console.log(i);
}

// Method2:

for(let i=1; i<=10; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

Example 3: 10 to 1

        for(let i=10;i>=1;i--)
           {
             console.log(i);
            }


Example4:

let i:number;
 
for(i=1;i<=5;i++)  
{
     console.log(i) // out Pirnt 1,2.---5
}
     console.log(i) out Print: 6

 Example:4.1
 
 let i:number;    // here i is global variable , not delcared any value for i
 
for(let i=1;i<=5;i++)  // here i is a local variable since we used let 
{
     console.log(i) // out Pirnt 1,2.---5
}
     console.log(i) // error 

Example:4.2

let i:number;
 
for(i=1;i<=5;i++);  

console.log(i) output Print: 6 instead of 1,2,---5 since we have added for loop with semi colon (;) 
===============================================================================================================
//break

Example:1
//break

for(let i=1;i<=10;i++)
{

     if(i==5)
     {
          break;
     }
     console.log(i); // out put 1,2,----5

}
================================================================================================
//continue

Example:2

for(let i=1;i<=10;i++)
{

     if(i==5)
     {
          continue;
     }
     console.log(i); // out put 1,2,----10 and skiped 5 number in the sequence. 

}

Example:3

for(let i=1;i<=10;i++)
{

     if(i==3 || i==5 || i==7)
     {
          continue;
     }
     console.log(i); // out put 1,2,----10 and skiped 3,5,7 number in the sequence. 

}

===========================================================================================
Difference Between while, do-while, and for Loop in TypeScript

Feature	                                     while Loop	                             do-while Loop	                           for Loop
Condition Check	                           Before execution	                        After execution	                       Before execution
Executes at least once?	                      ❌ No	                                   ✅ Yes	                               ❌ No
Initialization                          	Outside loop	                         Outside loop	                           Inside loop
Increment/Decrement	                        Inside loop                                	Inside loop	                          In loop header
Best Use Case	                    Unknown number of iterations	            Must run at least once	              Known number of iterations
=============================================================================================================
 Both are used inside loops (for, while, do-while).

Statement	           Purpose
break	               Stops the loop completely
continue	           Skips the current iteration and moves to the next iteration


*/