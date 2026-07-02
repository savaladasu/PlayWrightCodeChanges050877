/*  TypeScript is a statically typed language.
        Variable types are checked during development/compilation.
        Errors can be caught before running the code.
Example: 
let age: number = 30;
age = "Hello"; // Error

Type safty - yes

let num1:string = "5"
Let num2:number = 3

let result = num1+num2
Console.log(result) // allows when we specify the data type,  so type script is a type safty. 
===================================================================================================================    // 
JavaScript is a dynamically typed language.
    Variable types are determined at runtime.
    A variable can hold different types of values.
  
Example:  
let age = 30;
age = "Hello"; // Allowed

Type safty - no

Example:

let message = "Hello";   // String
let count = 30;         // Number

message = 100;

Example:

let result = "5" + 3; = 53 (because "5" + 3 performs string concatenation in JavaScript.)
console.log(result); // will not throw an error message and provide the result
======================================================================================================

Typing	                       Dynamic	             Static
Type Safety	                   ❌ No	            ✅ Yes
Compile-time Type Checking	   ❌ No             ✅ Yes
Prevents Type Errors Early	   ❌ No	            ✅ Yes

==========================================================================================================


Terminology:
let age: number = 30;

age - Variable 
number - data type
30 - value
:number - Annotation (explicitly specify the data type.)

What is Type Inference (TypeScript automatically determines the type from the assigned value.)

// Inference
let name = "John";      // string
let age = 30;           // number
let isActive = true;    // boolean

=====================================================================================================================
Data types:

1) Primitive Data Types (Built-in)

Number: Represent both intergers and  floating point numbers
        Example: 
        let age: number = 25;
        let price = 25.5;
        let big = 4234234234;

        console.log("Age:", age);      // Age: 25
        console.log("Price:", price);
        console.log("Big Number:", big);
        Console.log(typeof(age))

String: textual data/group of characters/
        Declaratoin
        1. SingleQuote ('')
        2. DoubleQuote ("")
        3. Backtick (``)


       let firstName: string = "John";
       let lastName: string = "Kenedy";

       // console.log("Hello", firstName, lastName); // Hello John Kenedy.

        let greeting: string = `Hello ${firstName} ${lastName}`;//whenever parameterizing data, then use backtick
        console.log(greeting)
Boolean: Represents true/false values
         let isStudent: boolean = true;
         let hasJob: boolean = false;

         console.log("Is Student?", isStudent); // Is Student? true
         console.log("Has Job", hasJob);        // Has Job? false 
NULL & UNDEFINED: Special types for absence of value

        let emptyValue: null = null;
        let notAssigned: undefined = undefined;

        console.log(emptyValue);
        console.log(notAssigned);       
        let price:number;
        console.log(price) // undefined 
Any: loses type script benefits. if we specify any, dynamically typed language // dont follow type safty

      let value:any="Welcome";
      console.log(typeof(value))

      value=100;
      console.log(typeof(value))

      value=true;
      console.log(typeof(value))

UNION TYPE - Combine multiple types

    let id: number | string | boolean;

    id = "ABC123";
    console.log(id); // Outputs: ABC123

    id = 12345;
    console.log(id); // Outputs: 12345

    id = true;
     console.log(id); // Outputs: true    

Void: function is not writtening anyvalue // Used for functions that don't return anything

      Example1:
      function show():void
      {
      console.log("Welcome");
      }
      show();

      Example2 (example is not for void)

      function sum(x:number, y:number)
       {
      console.log(x+y);
       }
      sum(10,20);

    Example3: (example is not for void)

    function sum(x:number, y:number);number 
       {
        return(x+y);
       }
      let result:number=sum(10,20);
      console.log(result)

      ======================================================================================================================================
 2) non Primitive Data Types 
 
    Object: (object / {}): The object type represents any value that is not a primitive (number, string, boolean, symbol, null, or undefined). You can define an object structurally by specifying its properties and their types.TypeScript// Explicitly defining the structure of the object
             let user: { id: number; username: string; isAdmin: boolean };

             user = {id: 101,username: "john_doe",isAdmin: false};
 
    Array: Arrays allow you to store collections of values of the same type. TypeScript gives you two ways to write array types: using the type followed by [], or using the generic Array<type> syntax.TypeScript// Square bracket syntax (Most common)
           
            let scores: number[] = [85, 92, 78];

           // Generic Array syntax
            let frameworks: Array<string> = ["Playwright", "Cypress", "Selenium"];


    Tuple: A tuple is a special type of array where the number of elements is fixed, and the type of each element is known at specific index positions. This is highly useful for structured data like key-value pairs or coordinate systems.TypeScript// Defining a tuple with a string and a number
       
           let employee: [string, number];

           employee = ["Alice", 5001]; // Correct
           employee = [5001, "Alice"]; // Error: Type 'number' is not assignable to type 'string'      
           
    Class: A class acts as a blueprint for creating objects with predefined properties and methods. In TypeScript, a class simultaneously creates a JavaScript constructor function and a TypeScript type.TypeScriptclass Car {
           brand: string;
    
         constructor(brand: string) {
          brand = brand;
        }
    
        drive(): void {
        console.log(`${this.brand} is moving.`);
        }
        }

       // Creating an instance (which is a non-primitive object)
        let myCar: Car = new Car("Tesla");  
        
    Interface: An interface is used to define a strict naming contract for your objects. It defines the "shape" that an object must conform to, but it doesn't generate any JavaScript code upon compilation—it purely exists for compile-time type checking.TypeScriptinterface Point {
              x: number;
              y: number;
            label?: string; // The '?' makes this property optional
            }

            let center: Point = { x: 0, y: 0 };
             Summary TableData TypeDescriptionExample SyntaxObjectGeneral structure containing key-value pairs.{ name: string }ArrayA flexible-length collection of a single type.string[] or Array<string>TupleA fixed-length collection with distinct types per index.[string, number]ClassA blueprint that handles data and behaviors.class User { ... }InterfaceA strict type contract defining the shape of an object.interface Vehicle { ... }    
======================================================================================================================
Summary Table
Data Type	                  Description	                                         Example Syntax
Object       	General structure containing key-value pairs.	                     { name: string }
Array	        A flexible-length collection of a single type.	                     string[] or Array<string>
Tuple	        A fixed-length collection with distinct types per index.	         [string, number]
Class	        A blueprint that handles data and behaviors.	class User           class User { ... }
Interface	    A strict type contract defining the shape of an object.              interface Vehicle { ... }

      */