/*
 * 1. An interface in TypeScript is a way to define the structure of an object.
 * 2. It tells the compiler what properties and types an object should have.
 * 3. It's like a blueprint for objects.
 *
 * Abstract method: We only define the method signature; there is no implementation.
 */
// syntex: 
interface InterfaceName
{
    properties
    abstract methods
}

/*
1 - Regular properties
2 - Optional properties
3 - Readonly properties & function types
4 - Extending interfaces
5 - Class implements interface
*/

// Example 1: Basic interface/Regular properties

interface Person       //Interface creation/interface structure/blueprint of interface
{
    name: string;
    age: number;
}

let student: Person = {   //Object creation
    name: "john",
    age: 30
}

console.log(student.name);  // to access data from Object
console.log(student.age);


// ex:2 Optional properties (?)

interface Employee
{
    eid: number;
    ename: string;
    edepartment?: string;   // optional property
}

let emp: Employee = {
    eid: 101,
    ename: "john"
}

let emp1: Employee = {
    eid: 102,
    ename: "Smith",
    edepartment: "accounts"
}

console.log(emp.eid, emp.ename, emp.edepartment);     // 101 john undefined
console.log(emp1.eid, emp1.ename, emp1.edepartment);  // 102 Smith accounts

// ex:3 Readonly properties (prevent modifications) & function types

interface Book
{
    title: string;
    readonly isbn: string;

    display(): void;   // abstract method
}

let b1: Book = {

    title: "Learn Playwright",
    isbn: "123-ABC",

    display()
    {
        console.log(b1.isbn, b1.title);
    }
}

console.log(b1.title);   // Learn Playwright
console.log(b1.isbn);    // 123-ABC

b1.display();   

console.log("After changing values...");

b1.title = "Learn TypeScript";   // ✅ Allowed

console.log("After changing title:", b1.title);

b1.isbn = "456-XYZ";   // ❌ Error - readonly property

// Ex:4 Extending interfaces

// Example 4: Extending Interfaces (Inheritance is applicable)

// Parent interface
/* interface Animal
{
    name: string;
}

// Child interface
interface Dog extends Animal
{
    color: string;
}

let mydog: Dog = {
    name: "Buddy",
    color: "Black"
}

console.log(mydog.name, mydog.color);   // Buddy Black
 */
// Ex:5 Class implements interface

// class can extends another class
// interface can extends another interface

// class can implement interface

interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {

    name: string; //inhereted from interface Animal
    color:string; //property belogs to class dog

    constructor(name: string,color:string) {
        this.name = name;
        this.color = color;
    }

    sound() {
        console.log("bark...");
    }
}

let pet = new Dog("Tommy","black");

console.log(pet.name);
console.log(pet.color);
pet.sound();

/* // Differences Between Class and Interface in TypeScript
Feature             Class	                                                     Interface
Definition	       Blueprint to create objects with implementation	           Defines structure/type of an object with no implementation
Contains	       Properties, constructors, methods (with implementation)	   Only property and method signatures (no implementation)
Instantiation	   Can be instantiated using the new keyword	               Cannot be instantiated directly
Inheritance	       Supports single inheritance using extends	               Supports multiple inheritance using impliments
Implements	       A class can implement one or more interfaces	               Interface cannot implement a class
Modifiers	       Supports access modifiers (public, private, protected)      Does not support access modifiers

                  =========*******================================

Interview-Friendly Comparison
Class	                                                Interface
A blueprint with implementation	                        A blueprint with only declarations
Can have constructors	                                Cannot have constructors
Can create objects using new	                        Cannot create objects
Can contain properties and implemented methods	        Can contain properties and method signatures only
Supports access modifiers (public, private, protected)	No access modifiers
Supports single inheritance                          	Supports multiple interface inheritance
Can implement interfaces	                            Cannot implement classes

Class: A class is a blueprint for creating objects that contains properties, constructors, and method implementations.

Interface: An interface is a blueprint that defines the structure (properties and method signatures) of an object or class. 
           It contains no implementation and is used as a contract that classes or objects must follow. */
// =====================================================================

// Modules concepts

// creat a new file with Module.ts

export let appname = "Calculator";

export function add(a: number, b: number): number {
    return a + b;
}

export class Formatter {

    static toUpper(str: string): string {
        return str.toUpperCase();
    }
}

// creat a new file with Main.ts

/* import { appname }import { appname } from "./Module";
   import { add } from "./Module";
   import { Formatter } from "./Module";
 */
import {appname,add,Formatter } from "./Module";

console.log(appname);

console.log (add(10, 20));

console.log(Formatter.toUpper("welcome"));
