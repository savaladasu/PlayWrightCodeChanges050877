import { test, expect } from '@playwright/test';

test('Verify the if-else condition', async ({ page }) => {

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

/* let Employee:object = {

   Name:"Srini",
   Salary: 5000,
   Job: "QA",
   Age: 30,  

   getdetails: function () {

    return `${this.Name} is a ${this.Job} earning ${this.Salary} at ${this.Age}`;

 }}

// Accessing object and Method - Approach 1 (using dot notation)

console.log (Employee.Name,Employee.Salary, Employee.Job,Employee.Age ) // Object access
console.log (Employee.getdetails())   // Method access     

// Accessing object and Method - Approach 1 (using dot notation)

console.log (Employee["Name"],Employee["Salary"], Employee["Job"],Employee["Age"] ) // Object access
console.log (Employee["getdetails"]())   // Method access     

console.log (typeof Employee)

//Modify the value

Employee.Job = "Manager"
console.log (Employee.Job)

// ===================================================================================
 */
// // 2. Inline Type Object - We also define the datatype of the keys (TS)
// The problem with the inline type is , need to repeat structure for every object

/* let Student: {
    Name: string,
    Age: number,
    Grade: string,
    Year:string,
    Getinfo:()=> string     // creation and declaring the object and values are not assiged to the  keys
    
} = {

    Name: "Srini",            // assighing the values  to the object    
    Age: 30,
    Grade: "A",
    Year:"3rd",
    Getinfo:function (){

    return `${this.Name} is a age of ${this.Age} having grade ${this.Grade} and ${this.Year}` 

}}

// Accessing object and Method - Approach 1 (using dot notation)

console.log (Student.Name, Student.Age, Student.Grade, Student.Year)
console.log (Student.Getinfo ())

// Accessing object - Approach 2 (using bracket notation)

console.log (Student["Name"], Student["Age"], Student["Grade"], Student["Year"])
console.log (Student["Getinfo"]()) */
// =======================================================================================

// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

/* type Product = {

    Name:string,
    Price:number,
    getinfo: () => string

};

let book1:Product = {

    Name:"Java",
    Price: 300,
    getinfo: function (){
    return `${book1.Name} has a price value of ${book1.Price}`
    }
}


let book2:Product = {

    Name:"Python",
    Price: 400,
    getinfo: function (){
    return `${book2.Name} has a price value of ${book2.Price}`
    }

}


let book3:Product = {

    Name:"Type Script",
    Price: 600,
    getinfo: function (){
    return `${book3.Name} has a price value of ${book3.Price}`
    }

}

// Accessing object and Method - Approach 1 (using dot notation)

console.log (book1.Name, book1.Price);
console.log(book1.getinfo())

console.log (book2.Name, book2.Price);
console.log(book2.getinfo())

console.log (book3.Name, book3.Price);
console.log(book3.getinfo()) */

// Example 2: Intersection Types

/* type Education = {

    Name:string
    Section: string
    Grade: string
}


type ContactDetails = {
   
     PhoneNum:number
     EMailID: string

}

type Student = Education & ContactDetails & {

   getinformation:() => string
}

let Stu:Student = {

    Name:"Srini",
    Section:"A",
    Grade:"A+",
    PhoneNum:1566,
    EMailID:"123rjko@gmail.com",

    getinformation: function () {

     return `${this.Name} in a section ${this.Section} and having grade: ${this.Grade} with the contact details phone: ${this.PhoneNum} and Emaild: ${this.EMailID}`

     }
}

// Accessing object and Method - Approach 1 (using dot notation)

console.log (Stu.Name, Stu.Section, Stu.Grade,Stu.PhoneNum, Stu.EMailID)
console.log (Stu.getinformation())
 */

// ===============================================================================================

// 4. Using the classes (JS ES16/TS)




});