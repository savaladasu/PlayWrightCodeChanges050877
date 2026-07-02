// Single line comment Ctrl+/
// Mutiple line comment Shift+Alt+A
// var,let,const are the different type of variables 
// Syntex: Keyword VariableName :data type=value
//ex          var age :number=30 
//ex          var age=30
// var vs let vs const
/*  1) Scope
    2) Declaration/Value Assignment
    3) Re-declaration
    4) Re-initialization/Re-assignment
    5) Hoisting
//var - We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected behavior.

//let - Use let when you need a variable that can change.

//const - Use const when the variable value should not change.  */
//====================================================================================================================
//1) Scope - Accessible area ( Functional Scope(var) & Block Scope(let, const))

//Example 1: var (Functional scope)

/* function varScope()
{
    if(true)
    {
        var msg = "Hello World";
        //console.log(msg);
    }

    console.log(msg);
}

varScope(); */

//Example 2: let and const (Block Scope)

/*  function blockScope()
{
    if(true)
    {
        let msg = "Hello World";
        const greet = "Hello const";

        console.log(msg);
        console.log(greet);
    }
        //console.log(msg); Can't access outside of the block
        //console.log(greet); Can't access outside of the block
}

blockScope(); */

//Example 3: 

/*  function scopeDiff()
{
    if(true)
    {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;

        console.log(num1);
        console.log(num2);
        console.log(num3);
    }

    // console.log(num1); // access - functional
    // console.log(num2); // cannot access - block
    // console.log(num3); // cannot access - block
}
scopeDiff();*/
//===================================================================================================================
 // 2) Declaration/Value Assignment

//Example1: var,let can be declared without initialization
/*
var x; // declaration
console.log(x); // undefined

x = 30; // initialization
console.log(x);
*/

//Example2: let can be declared without initialization

/*  let y; // declaration
console.log(y); // undefined

y = 30;// initialization
console.log(y);*/

//Example3: Constant must be initialized at the time of declaration.
//const z -incorrect
   const z=50 // correct
   console.log(z);
// ===============================================================================================

// 3) Re-declaration

// var  - allows the Re-declaration
// let and const - not allows the Re-declaration (making code safer)

// Example 1: var allows the re-declaration

/*
var city = "New York";
var city = "Los Angeles";

console.log(city);
*/

// Example 2: let - not allowed re-declaration

// let country = "India";
// let country = "US";

// console.log(country);

//Example 3: Const not allowed re-declaration
/* const planet ="Earth"
const planet ="Mars"
console.log(planet)*/
//======================================================================================================================
//4) Re-initialization/Re-assignment

//var and let - Re-assignment Allowed
//const - Re-assignment Not allowed (Only constants allowed - cannot change the value)

//Example 1: var allows re-assignment

/*
var age = 25;
age = 30; // allowed
console.log(age);
*/

//Example 2: let allows re-assignment

/*let age = 25;
age = 30; // allowed
console.log(age);
/*
//Eample 3:const not allows re-assignment

const age = 25;
age = 30; // not allowed
console.log(age);
//================================================================================================================
// 5) Hoisting - var (Hoisted with undefined), let and const (Not Initialized)

/*
console.log(a); // undefined

var a = 10;
console.log(a);
*/

/*  console.log(a); // Not Initialized
let a = 10;
console.log(a);


console.log(a); // Not Initialized
const a = 10;
console.log(a); */

/*   ==============================================================================================================


Feature	                      var	                      let	                                            const
Scope	                 Function Scope	                  Block Scope	                                Block Scope
Redeclaration	           ✅ Allowed	              ❌ Not Allowed	                                ❌ Not Allowed
Reassignment	           ✅ Allowed	               ✅ Allowed	                                ❌ Not Allowed
Hoisted                 	✅ Yes	                    ✅ Yes (TDZ)	                                  ✅ Yes (TDZ)
Modern Usage	         ❌ Avoid	                    ✅ Use when value changes	                   ✅ Preferred

*/

