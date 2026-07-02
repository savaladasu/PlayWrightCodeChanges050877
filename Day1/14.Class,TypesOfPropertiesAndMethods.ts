/*
1. Class
2. Read only Properties
3. Optional property
4. Static variables and methods
*/

/* class Student
{
    readonly studentId: number;   // Read-only property (can only be assigned once, inside constructor)
    name: string;                 // Regular property
    email?: string;               // Optional property (can be undefined)
    //schoolName: string;

    // Constructor
    constructor(sid: number, sname: string, email?: string)
    {
        this.studentId = sid;
        this.name = sname;
        this.email = email;   // If you don't pass email then it is undefined
    }

    // Method (or Named funciton)

    displayInfo(): void
{
    console.log("Student ID:", this.studentId);
    console.log("Student Name:", this.name);

    if (this.email)
    {
        console.log("Email:", this.email);
    }
    else
    {
        console.log("Email is not provided");
    }
}

}

// Class Usage in object

let s1 = new Student(101, "John");
let s2 = new Student(102, "Bob", "bob@gmail.com");

// Display/access student information

s1.displayInfo();
s2.displayInfo();

// Try to modify the studentId of s1 object

s1.studentId = 111; // Cannot assign to 'studentId' because it is a read-only property.
 */
// =============================================================================

// 4. Static variables and methods
// 1) Static properties/methods are common/shared across all the objects
// 2) Static properties/methods can be accessed through class name directly
// 3) Static properties/methods can be modified using class
// 4) we can't use "this" for static properties, instead we can use class name.

class Student
{
    readonly studentId: number;   // Read-only property (can only be assigned once, inside constructor)
    name: string;                 // Regular property
    email?: string;               // Optional property (can be undefined)
    static schoolName: string = "Green Wood" // Static variable shared among all instances/objects

    // Constructor
    constructor(sid: number, sname: string, email?: string)
    {
        this.studentId = sid;
        this.name = sname;
        this.email = email;   // If you don't pass email then it is undefined
    }

    // Method (or Named funciton)

    displayInfo(): void
{
    console.log("Student ID:", this.studentId);
    console.log("Student Name:", this.name);

    if (this.email)
    {
        console.log("Email:", this.email);
    }
    else
    {
        console.log("Email is not provided");
    }

        console.log ("school Name:", Student.schoolName)   //access static property using  Student (Classs Name)
}

    static changeSchoolName(NewName:string):void{                      // Static Method 

    Student.schoolName = NewName

}

}

// Class Usage in object

let s1 = new Student(101, "John");
let s2 = new Student(102, "Bob", "bob@gmail.com");

// Display/access student information

s1.displayInfo();
s2.displayInfo();

// Try to modify the studentId of s1 object

//s1.studentId = 111; // Cannot assign to 'studentId' because it is a read-only property.

//change the school name using static method

Student.changeSchoolName("Sunrise Academy")

// Dispaly student information

console.log ("Dispalying student information after changing school name...")

s1.displayInfo();
s2.displayInfo();

// ============================================================================================
// Method Overloading and Constructor Overloading in TypeScript

class Calculator {                          // constructor overloading                             

    // Constructor Overloading (Signatures)

    constructor();                         // Default constructor
    constructor(a: number, b: number);     // Parameterized constructor

    // Constructor Implementation
    constructor(a?: number, b?: number) {

        if (a !== undefined && b !== undefined) {
            console.log("Sum of a & b:", (a + b));
        }
        else {
            console.log("Default constructor called...");
        }
    }
}

// Usage
let calc1 = new Calculator();
let calc2 = new Calculator(12,30);

// =====================================================================
// Method overloading 

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

// Usage
console.log ("adding two numbers :", calc1.add (10,20));
console.log("adding three numbers:", calc2.add (10,20,30));

