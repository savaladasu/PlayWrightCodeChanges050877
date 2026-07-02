import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {
/* // parent class 

class Car 
{
    name:string;
    color:string;
    model:string;

constructor (name:string, color:string,model:string)
{
    this.name = name;
    this.color = color
    this.model = model
}

start () 
{
console.log (" car started......")
}

stop ()
{
console.log("car stopped......")
}

displayinfo () 
{
console.log (`name:${this.name},color:${this.color},model:${this.model}`);
} }

// child calss - Honda

class Honda extends Car
{

   year:number;
   
  
   constructor (name:string, color:string,model:string,year:number) 
{
   super (name,color,model); 
   this.year = year;
}

start ()
{
console.log ("Hoda started...")
}

yom ()
{
console.log (`name:${this.name},color:${this.color},model:${this.model},year:${this.year}`);
}
}

// child calss - Maruthi

class Maruthi extends Car
{

   year:number;
   
  
   constructor (name:string, color:string,model:string,year:number) 
{
   super (name,color,model); 
   this.year = year;
}

start ()
{
console.log ("Maruthi started...")
}

yom ()
{
console.log (`name:${this.name},color:${this.color},model:${this.model},year:${this.year}`);
}
}

// Object creation for Honda

let honda = new Honda ("Honda","Red","Honda City",2005)
console.log (honda.name)
console.log (honda.color)
console.log (honda.model)
console.log (honda.yom)

honda.start ()
honda.stop ()
honda.displayinfo()
honda.yom ()

// Object creation for Maruthi 

let maruthi = new Maruthi ("Maruthi","Blue","Grand Vitara",2006)
console.log (maruthi.name)
console.log (maruthi.color)
console.log (maruthi.model)
console.log (maruthi.yom)

maruthi.start ()
maruthi.stop ()
maruthi.displayinfo()
maruthi.yom ()

// Parent class variable is holding child class object

let car: Car = new Honda ("Honda","Red","Honda City",2005)

car.displayinfo();               // Name: Honda, Color: Red, Model: Honda city
car.start();                     // Honda started...

car.yom();                       // Not accessible. yom() is defined in the child class but not in the parent class.
                                 // Inheritance is  possbile only from Parent to child, not from child to parent */

// ===========================================================================================


// super() - used to invoke immediate parent class constructor
// super - used to invoke immediate parent class method
// super - can't be used for invoking the parent class property (In Java, it is possible)

class Parent {

    num: number = 10;

    constructor() {
        console.log("This is Parent class constructor..");
    }

    display() {
        console.log("This is display() method from Parent class...");
    }
}

class Child extends Parent {

    num: number = 20;    // overridden

    constructor() {

        super();   // this will call parent class constructor (must be called)

        console.log("This is child class constructor...");
    }

    show() {

        console.log(super.number); //parent's num //TS doesn't support super.num to access parent class properties directly like java does
        console.log(this.num);  //20
        console.log("This is show() method from the child class...");
    }

   
    display() {             // Overridden method

        super.display (); // This will invoke parent class method
        console.log("This is display() method from child class...");
    }

}

// Object creation for child class

let c1= new Child ();

c1.show(); //child class
c1.display(); // child class

// This is a classic interview example for explaining inheritance, constructor chaining, 
// method overriding, and the super keyword in TypeScript.

// =========================================================================================

// Access modifier 

// Parent classs

class Person
{
public name: string; // public property - accessible anywhere
protected age: number; // protected property - accessible within the class and its subclasses.
private ssn:number; // private property - accessible only within this class
constructor(name:string, age:number, ssn:number)
{
this.name=name;
this.age=age;
this.ssn=ssn;
}
displayinfo()
{
console.log("Name:",this.name);
console.log("Age:",this.age);
console.log("SSN:",this.ssn);
} 
}

// Child class
class Employee extends Person
{
    private employeeId: number;

    constructor(name: string, age: number, ssn: number, employeeId: number)
    {
        super(name, age, ssn);
        this.employeeId = employeeId;
    }

    showEmployeeDetails()
    {
        console.log(this.name);       // public - accessible
        console.log(this.age);        // protected - accessible
        // console.log(this.ssn);     // Error: private property
        console.log(this.employeeId); // private, still we can access since it is declared inside the same class
    }
}

let emp = new Employee("John", 30, 212312312, 101);

emp.displayinfo();
emp.showEmployeeDetails();

console.log(emp.name);   // accessible
console.log(emp.age); // Not accessible since it is out of child class
console.log(emp.ssn);    // Not accessible as it is  private (within the class accessable)



});

