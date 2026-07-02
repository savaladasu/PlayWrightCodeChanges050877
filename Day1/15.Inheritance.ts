// Inheritance
// A class can reuse the properties and methods of another class.
// The class being inherited is called the Parent/Base class.
// The class that inherits is called the Child/Derived class.

// Parent class

class Car
{
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string)
    {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start()
    {
        console.log("Car started...");
    }

    stop()
    {
        console.log("Car stopped...");
    }

    displayInformation()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
    }
}

// Child class - Honda
class Honda extends Car                         // extends: to establish parent to child relationship (Inheritance)
{
    year: number;

    constructor(name: string, color: string, model: string, year: number)
    {
        super(name, color, model);                  //super() function to invoke the parent class constructor before initializing child-specific properties.
        this.year = year;
    }

    // Method overiding
    start()
    {
        console.log("Honda started...");
    }

    yom() 
    {

        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model},"yom":${this.year}`)
    }

}

// Child class - Maruthi
class Maruthi extends Car                         // extends: to establish parent to child relationship (Inheritance)
{
    year: number;

    constructor(name: string, color: string, model: string, year: number)
    {
        super(name, color, model);                  //super() function to invoke the parent class constructor before initializing child-specific properties.
        this.year = year;
    }

    // Method overiding
    start()
    {
        console.log("Maruthi started...");
    }

    yom() 
    {

        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model},"yom":${this.year}`)
    }

}

// Usage

// Create Honda object

let honda = new Honda("Honda", "Red", "Honda city", 2024);

console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start();   // Honda started...   // called child class method (overridden)
honda.displayInformation()  //Name:Honda, Color:Red, Model:Honda City // Parent class
honda.stop()    // Parent class
honda.yom()  // Name:Honda, Color:Red, Model:Honda City ,YOM:2024 // child class



// Create Maruthi object

let maruthi = new Maruthi("Maruthi", "Blue", "Wagnor", 2025);

console.log(maruthi.name);
console.log(maruthi.color);
console.log(maruthi.model);
console.log(maruthi.year);

maruthi.start();   // Maruthi started...   // called child class method (overridden)
maruthi.displayInformation()  //Name:Maruthi, Color:Blue, Model:Wagnor // Parent class
maruthi.stop()    // Parent class
maruthi.yom()  // Name:Maruthi, Color:Blue, Model:Wagnor,YOM:2025 // child class

// Parent class variable is holding child class object

let car: Car = new Honda("Honda", "Red", "Honda city", 2024);

car.displayInformation();        // Name: Honda, Color: Red, Model: Honda city
car.start();                     // Honda started...

car.yom();                       // Not accessible. yom() is defined in the child class but not in the parent class.
                                 // Inheritance is  possbile only from Parent to child, not from child to parent

// ============================================================================================================

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

// =====================================================================================================
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