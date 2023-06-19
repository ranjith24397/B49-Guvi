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

  console.log(userInput.split("").join(" "));

  //end-here
});