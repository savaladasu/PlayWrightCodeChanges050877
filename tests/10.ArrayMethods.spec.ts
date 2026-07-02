import { test, expect } from '@playwright/test';
test('Verify the if-else condition', async ({ page }) => {

let numbers:number []= [1,2,3,4,5,6]
let fruits: string [] = ["apple","bananna","straberry","Pappaya"]

console.log (numbers.length) // 6 elements in a array 
console.log (fruits.length) //  4 elements in a array 

// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)

   numbers.push (7,8)
   console.log ("Result after push method", numbers) // [1,2,3,4,5,6,7,8]  

// 2. pop() - Removes the last element from an array
// Syntax: array.pop()

   let lastnumber = numbers.pop()
   console.log ("last number is removed", lastnumber) // [8]
   console.log ("Result after pop method", numbers) // [1,2,3,4,5,6,7]

// 3. shift() - Removes the first element from an array
// Syntax: array.shift()
   
   let firstnum =  numbers.shift()

   console.log("after frst element is removed",firstnum) // [1]
   console.log ("Result after shift method is used", numbers) // [2,3,4,5,6,7]

// 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)


  let addfirstelement = numbers.unshift(1)
  console.log ("after unshif method is used", addfirstelement ) // [1]
  console.log ("Result of unshit method",numbers ) // [1,2,3,4,5,6,7]

// 5. concat() - Combines two or more arrays
// Syntax: array.concat(array1, ..., arrayN)
   
   let Combinearray = numbers.concat ([8,9],[10])
   console.log ("Result of concat", Combinearray) // [1,2,3,4,5,6,7,8, 9, 10]


// 6. slice() - Extracts a section of an array
// Starting Index starts from Zero
// Ending Index will be exclusive. Ex: If 3 is Ending Index It will consider 2  (3-1=2)
// Syntax: array.slice(start, end)

   let extractelements = numbers.slice (7,3)
   console.log ("extracted elements from array", extractelements) // [8, 9, 10]
   console.log ("new arrary after extracted elements", numbers) // [1,2,3,4,5,6,7]

   // 7. splice() - Adds/removes elements from an array(From everywhere)
   // Syntax: array.splice(start, deleteCount, item1, ..., itemN)

    //Ex1: only removing

     let removetwoelements = numbers.splice (2,2) 
     console.log ("removed elements from array", removetwoelements) // [3,4]
     console.log ("new array of numbers", numbers) // [1,2,5,6,7]

   //Ex2: not removed but added

     let addnumbers = numbers.splice (2,0,3,4)
     console.log ("numbers added to the array", addnumbers) // [3,4]
     console.log ("new array of numbers", numbers) // [1, 2, 3, 4, 5, 6, 7]

   //Ex3: both remove and add

     let removeandadd = numbers.splice (0,2,8,9)
     console.log ("remove and add elements to the array", removeandadd) // [1,2]
     console.log ("new array of the numbers",numbers) // [8, 9, 3, 4, 5, 6, 7]

    // 8. indexOf() - Finds the index of an element, If element not found then return -1
    // Syntax: array.indexOf(searchElement)  (or)  array.indexOf(searchElement, Starting Index)

      //  Ex 1
       
      let indexofEight = numbers.indexOf(9)
      console.log ("find the index of number nine", indexofEight)

      //  Ex 2
      //  if search element not found, array will return -1)

       let indexofone = numbers.indexOf(1)
       console.log ("find the index of number one", indexofone) // -1

      // Ex 3
      // instead of search element from starting index (0), we can decide from which index need to start searching. 

       let indexoffive = numbers.indexOf(5,3)
       console.log ("find the index of number one", indexoffive) // 4


    // 9. includes() - Checks if an element exists
    //True or false
    // Syntax: array.includes(searchElement, fromIndex)

   //  Example 1

    let isnineexists = numbers.includes (9)
    console.log ("is element nigh exists in array",isnineexists)

   //  Example 2

     let isoneexists = numbers.includes (1)
     console.log ("is element one exists in array", isoneexists)

  //  Example 3

     let isfiveexists = numbers.includes (5,3 )
     console.log ("is element one exists in array", isfiveexists)

// 10. toString() - Converts array to string
// Syntax: array.toString()

    let arraytostring1 = numbers.toString()
    console.log ("Conver numbers array to string", arraytostring1)

    let arraytostring2 = fruits.toString()
    console.log ("convert fruits array to string", arraytostring2)
 
});