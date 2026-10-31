// console.log("Hey there! I am Tanmay")

// console.log(window)
// this is not present in the node enviroment if we run this same in the browser
// it will run but when js v8 is embedded in c++ some dom manipulation 
// removes from that so node.js inculdes only core functionality of JS


// Module:-
// importing
const math = require("./math")

// we can call like this 
console.log(math.addfunc(1,2))
console.log(math.subfunc(5,2))

