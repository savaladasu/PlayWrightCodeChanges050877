import { test, expect } from '@playwright/test';
test('Verify the if-else condition', async ({ page }) => {

/*
1. Class
2. Read only Properties
3. Optional property
4. Static variables and methods
*/

/*// class creation

class Student 
{
Name:string;                     // Regular property
readonly StudenID: number;       // Read-only property (can only be assigned once, inside constructor)
EmailID ?:string;                // Optional property (can be undefined)

 // constructor 

constructor (SName:string,SID:number,SEmailid:string)
{

this.Name = SName;
this.StudenID = SID;
this.EmailID = SEmailid;           // If you don't pass email then it is undefined

}

// Method (or Named funciton)

getstudentdetails(): void 

{

console.log ("Student Name", this.Name)
console.log ("Student Id", this.StudenID)
if (this.EmailID) {

   console.log ("student EmailID",this.EmailID) 
} else {

  console.log ("Emailid is not provided")  
}

}
}

// Class Usage in object

let s1 = new Student("John",101 )      
let s2 = new Student("srini", 104, "yahoo.com")


// Display/access student information
s1.getstudentdetails ()
s2.getstudentdetails()

// Try to modify the studentId of s1 object

// s1.StudenID = 102            //Error: Cannot assign to 'StudenID' because it is a read-only property. 
 */
// =====================================================================================
// 4. Static variables and methods
// 1) Static properties/methods are common/shared across all the objects
// 2) Static properties/methods can be accessed through class name directly
// 3) Static properties/methods can be modified using class
// 4) we can't use "this" for static properties, instead we can use class name.


// class creation
/* 
class Student 
{
Name:string;                     // Regular property
readonly StudenID: number;       // Read-only property (can only be assigned once, inside constructor)
EmailID ?:string;                // Optional property (can be undefined)
static SchoolName:string = "Little flower school" // Static variable shared among all instances/objects

// constructor 

constructor (SName:string,SID:number,SEmailid:string)
{

this.Name = SName;
this.StudenID = SID;
this.EmailID = SEmailid;           // If you don't pass email then it is undefined

}

// Method (or Named funciton)

getstudentdetails(): void 

{

console.log ("Student Name", this.Name)
console.log ("Student Id", this.StudenID)
if (this.EmailID) {

   console.log ("student EmailID",this.EmailID) 
} else {

  console.log ("Emailid is not provided")  
}
 console.log ("school Name",Student.SchoolName)
}

// Static Method

static SchoolNameChange (NewSchool:string):void {     

    Student.SchoolName = NewSchool

        } 

}

//change the school name using static method

Student.SchoolNameChange("Sunrise Academy")




// Class Usage in object

let s1 = new Student("John",101 )      
let s2 = new Student("srini", 104, "yahoo.com")


// Display/access student information
s1.getstudentdetails ()
s2.getstudentdetails()
 */
// ============================================================================================
// Method Overloading and Constructor Overloading in TypeScript

class Calculator {

    // Constructor Overloading (Signatures)
    constructor();
    constructor(a: number, b: number);

    // Constructor Implementation
    constructor(a?: number, b?: number) {

        if (a !== undefined && b !== undefined) {
            console.log("Addition of a + b =", a + b);
        } else {
            console.log("a and b values are not provided");
        }
    }

    // Method Overloading (Signatures)
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    // Method Implementation
    add(a: number, b: number, c?: number): number {

        if (c !== undefined) {
            return a + b + c;
        }

        return a + b;
    }
}

// Object Creation
let calc1 = new Calculator();
let calc2 = new Calculator(10, 20);

// Method Calls
console.log("Adding two numbers:", calc1.add(10, 20));
console.log("Adding three numbers:", calc2.add(10, 20, 30));













});