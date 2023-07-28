// let ispositive = (num)=>{
    
//     return num>0;

//     }
// console.log(toProperCase("jaN"));
// console.log(ispositive("-4"));
// console.log(ispositive("5"));
// console.log(ispositive("1"));

// sub(2,1);

//function greet(name){
    

//     console.log("Hello" +  name)
// }

// greet(' Sam');

// function toProperCase(name){

//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

//     console.log(toProperCase("raNjith"))

// function factorial(n){
//     if(n==1)            
//         console.log(1)
//     console.log(n*factorial(n-1))
// }
//     (factorial(6));
//IIFE function to print capital of first letter each words in array

//let strings = ["hello", "world", "javascript", "example"];

// Anonymous function to convert strings to title case
// (function(arr) {
//   for (let i = 0; i < strings.length; i++) {
//     let words = arr[i].split(" ");
//     for (let j = 0; j < words.length; j++) {
//       words[j] = words[j][0].toUpperCase() + words[j].substr(1)
//     }
//     arr[i] = words.join(" ");
//   }
//   console.log(arr);
// // })(strings);
// let input = "string";
// let output = "";

// for (let i = 0; i < input.length; i++) {
//   if (i % 2 === 0) {
//     output += input[i].toLowerCase();
//   } else {
//     output += input[i].toUpperCase();
//   }
// }

// console.log(output);

// greet("andy");

// console.log(factorial(5));

// function test(){

//     console.log(9);
// }
//  test();

//  function add(a,b){
//     console.log(a+b);
//  }

//  add(3,4);

//  function sub(num1,num2){
//     return num1-num2;
//  }
//  console.log(sub(4,2));

// function add(num1, num2){
//     console.log(num1+num2);
// }
//     let result = add(2,4);
//     console.log("The result is:" + result);//function using the console.log will just print the case

//     function adder(a,b){
//         return a+b;
//     }
//         let results = adder(4,4);
//         console.log("The result is:" + results);//return function will return the value.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let a = userInput[0].split("");
  let sum =0;
  for(let i = 0;i<=a.length;i++){
      
    sum += a[i];
      
  } 
    console.log(sum);
  
  //end-here
});