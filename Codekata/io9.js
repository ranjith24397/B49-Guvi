// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput ;

inp.on("line", (data) => {
  userInput = data;
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  for(let i = 0; i<userInput.length; i++){

    console.log(userInput[i]);

  }
  

  //end-here
});