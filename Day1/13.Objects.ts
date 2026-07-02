// Object - object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

// Ex:

// employee -- name, desig, sal, dep
//             bonus(), getDetails(), setDetails()

// student - name, sid, grade
//           getDetails(), setDetails()


// Different ways to create an object in JS/TS //

// 1. Using 'object' type - Directly define the values for variables (JS/TS)

// 2. Inline Type Object - We also define the datatype of the keys (TS)

// 3. Using type aliases (TS)

// 4. Using the classes (JS ES16/TS)


// 1. using 'object' type - Directly define the values for variable

// The TypeScript 'object' type represents all values that are not in primitive types.

/*
let employee: object = {
    name: "John",
    age: 30,
    salary: 50000,
    job: "Engineer"
}
*/

let employee: object = {
    name: "John",
    salary: 50000,
    job: "Engineer",

    getDetails: function () {
        // console.log(this.name, this.salary, this.job);

        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
}

console.log(typeof employee); //Object

// Accessing object - Approach 1 (using dot notation)

console.log(employee.name, employee.salary, employee.job); // John 50000 Engineer
console.log(employee.getDetails());// John is a Engineer earning 50000


// Accessing object - Approach 2 (using bracket notation)

console.log(employee["name"], employee["salary"], employee["job"]);// John 50000 Engineer
console.log(employee["getDetails"]());// John is a Engineer earning 50000

//Modify the value
employee.job="Manager";  //employee["job"]="Manager";
console.log("Modified job is:", employee.job); // Manager

// ================================================================================================================

// 2. Inline Type Object - We also define the datatype of the keys (TS)
// The problem with the inline type is , need to repeat structure for every object

let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string   // creation and declaring the object and values are not assiged to the  keys
} =                             
{
    name: "Scott",               // assighing the values  to the object
    age: 15,
    grade: "A",

    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log (student.getSummary);

// ===============================================================================================

// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

//Example 1:

type Product={
    name: string,
    price: number,
    getInfo: ()=>string // creation of type structure 
};

let book1:Product=
{
    name:"Learn Java",
    price: 300,
    getInfo: function(){
        return `${this.name} costs ${this.price}`;  // assigning structure at object level   
    }
}

let book2:Product=
{
    name:"Learn AI",
    price: 200,
    getInfo: function(){
        return `${this.name} costs ${this.price}`;  // assigning structure at object level   
    }
}

let book3:Product=
{
    name:"Learn Python",
    price: 500,
    getInfo: function(){
        return `${this.name} costs ${this.price}`;  // assigning the structure at object level   
    }
}

//  or using for  loop

for (let i in book3){
 
     console.log (book3.name)
     console.log (book3.price)
}

console.log (book1.getInfo()) 
console.log (book2.getInfo())
console.log (book3.getInfo())

// Example 2: Intersection Types

type Personal={
    name:string,
    age:number
};

type Contact={
    email:string,
    phone: number
}

type Candidate =Personal & Contact &
{
    getContactInfo:()=>string;
}

let cand:Candidate={
    name:"Scott",
    age:25,
    email:"abc@gmail.com",
    phone: 12345667,
    getContactInfo:function(){

    return `${this.name} can be contacted at ${this.phone} or ${this.email}`
    
        
    }
}

console.log (cand.getContactInfo()); 

// ===============================================================================================

// 4. Using the classes (JS ES16/TS)

class Person{                                                        //Class : contains constructor and methods
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string,firstName:string,lastName:string)         //constructor: assign the data to the class 
    {
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName():string{                                          // method: return the value
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails():string{
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
    }
}

   let Person1 = new Person ('1234677', "John", "Abraham")           // Object creation
  console.log ( Person1.getDetails());
   
   let Person2 = new Person ("23232323","Srini","vasu")
    console.log (Person2.getDetails());

// class is a blue print and for one class, we can create multiple objects. all objects are independent but derived from the same class using new keyword
// objects are never shared the properties, methods and contructors 
// class is a logical entity and object is a psysical entity.