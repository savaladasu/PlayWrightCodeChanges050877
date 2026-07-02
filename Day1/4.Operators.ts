/* let a:number=10, b:number=20;

Arithmetic operations

   console.log(a+b);
   console.log(b-a);
   console.log(a*b);
   console.log(b/a);
   console.log(a%b);
   console.log(5**2);
================================================================================================================
Assignment Operators =

a=5;
b=10;

a=a+b

console.log(a) or console.log(a=a+b)// out put value:15
or 
a+=b
console.log(a) or console.log(a+=b) // out put value:15

   console.log(a=a+b); or a+=b
   console.log(a=b-a); or a-=b
   console.log(a=a*b); or a*=b
   console.log(a=b/a); or a/+=b
   console.log(a=a%b); or a%+=b
   console.log(a=5**2);or a**2+=b

=======================================================================================================
Relational/Comparison Operators
Returns boolean- true/ false
Examples: 
>  <  >=  <=  ==  !=  ===(Strict equality)

 console.log("********** Relational Operators **********")
    a=10;
    b=20
    console.log(a>b); //false
    console.log(a<b); // true
    console.log(a<=b); //true
    console.log(a>=b); //false
    console.log(a==b); //false
    console.log(a!=b); //true

//Difference between ==(equaltiy)    ===(strict equality)

console.log("********* Difference between == (equality) === (strict equality) *********")
    let num1:any=10;   //number type
    let num2:any="10"  // string

    console.log(num1==num2); //true ( only comapres values)
    console.log(num1===num2);//false(comapres the values & type)
===================================================================================================
/Logical Operators   &&  ||  !

returns true/false (boolean)
works between boolean variables

 b1      b2       &&         ||          !b1
--------------------------------------------
true     true     true       true        false
true     false    false      true
false    true     false      true        true
false    false    false      false

Example

let b1:boolean=true;
let b2:boolean=false;

       console.log(b1 && b2); //false
       console.log(b1 || b2); ///true
       console.log(!b1);   //false
       console.log(!b2);   //true
 
combination of logical & Relational operators
console.log(20>10 && 10>5); // true
console.log(10<20 || 5>10); // true
===========================================================================================
Increment (++) and decrement (--) operators

let x:number = 10;

//post increment    //x=x+1;

      console.log(x); //11

      pre-increment (x++)

      console.log(x); //11
      let res:number=x++;
      console.log(res); //10
      console.log(x); //11

//post increment    //++x;

     let res:number=++x;
     console.log(res); //11
     console.log(x);  //11

//post decrement    //x=x-1;

  let x:number = 10;

      console.log(x); //10

      pre-decrement (x--)

      console.log(x); // 9

      let res:number=x--;

      console.log(res); //10
      console.log(x); //9

//post decrement   //--x;

     let res:number=--x;
     console.log(res); /9
     console.log(x);  //9

  ===========================================================================================================
  / Ternary/conditional operator
  
        Symbols:   ?:

        Syntex: exp ? res1 : res2;
 
Example 1

let a:number=100, b:number=200;

let res:number= (a>b) ? a: b;
 console.log(res);//output: 200

Example 2:
 
let personAge:number=30;
let res:string= (personAge>=18)? "Adult": "Minor";
console.log(res);   // output: Adult


*/