/* What is an Array in TypeScript?
An Array is a data structure used to store multiple values of the same type/different type in a single variable.
Instead of creating many variables, you can store all values in one array.
Arrays follows the indexing concept and  index (position of the element) starts with 0 (lower bound), n-1 (upper)
if user trying to store value more than index then throw out of bound exception
Arrays are declaring using[] or generic `array <T> type

// Approach 1: using literal

let names: string[] = [];   // Declaration

// Initialization/assigning values
    names[0] = "John";
    names[1] = "Smith";
    names[2] = "Peter";
    names[3] = "Scott";

// let names:string[]=["John","Smith","Peter","Scott"];  // declaration + initialization
    console.log(names);

// Approach 2: using generic array <T> type

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"];
let empIds: Array<number> = [101, 102, 103, 104];
let data: Array<string | number> = ["John", 101, "Smith", 102, "Peter", "Scott"];
let mixedData: Array<any> = [1, "John", true, null];

// console.log(empNames);
// console.log(empNames[1]);

// Example 1: Iterating over an array using a traditional for loop

console.log("Size of an Array:", empNames.length); // How many values stored

// console.log("Employee Names......");

for (let i = 0; i < empNames.length; i++) // i <= empNames.length - 1
{
    console.log(empNames[i]); // i is representing an index
}

// Example 2: Iterating using the 'for...in' loop (indexes)

console.log("Employee Ids.....");

for (let i in empIds)
{
    console.log(empIds[i]);
}


// Example 3: Iterating using the 'for...of' loop (values)

console.log("Mixed Data.....");

for (let value of mixedData)
{
    console.log(value);
}

//Example 4: Passing an Array to the function

//Search an element in a n array using function

function search(ele:number, arr:number[]):boolean
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]===ele)
        {
            return true;  // Element found
        }
    }
    return false;
}

let arr:number[]=[10,20,30,40,50];

console.log(search(30,arr)); // true
console.log(search(100,arr)); // false

//Example 5 : A functions takes an Array and returns an array

function capitalizeWords(arr:string[]): string[]
{
    let result:string[]=[];

    for(let i=0;i<arr.length;i++)
    {
        result[i]=arr[i].toUpperCase();
    }

    return result;

}

let words:string[]=["hello","world","TypeScript"];

console.log(capitalizeWords(words));

// =================================================================================

/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 */

//Example 1 : tuple with 2 values of string, number
/*
let person:[string,number]=["John",101];

console.log(person[0]);
console.log(person[1]);

console.log(person);
*/

//Example 2: Tuple with multiple values

let user:[number,string,boolean,number,string]=[10,"John",true,101,"welcome"];
console.log(user);

// Example 3: Iterating over a tuple using a traditional for loop
console.log("using traditional for loop.....")
for(let i=0;i<user.length;i++)
{
    console.log(user[i]);
}


// Example 4: Iterating using a 'for...in' loop (index-based iteration)

console.log("using for..in loop.......")
for(let i in user)
{
    console.log(user[i]);
}

//Example 5: Iterating using a 'for...of' loop (value-based iteration)

console.log("using for..of loop...")

for(let value of user)
{
    console.log(value);
}

// Example 6: Tuple Array (Array of Tuples)

let students: [number, string][] = [[101, "John"], [102, "Peter"], [103, "Scott"]];

console.log(students.length)

console.log(students[0]); //[101,"John"]

// if we want extra data from tuple 

let tp = students[0]
console.log(tp(0)); //101
console.log(tp(1)); //"john"
