// in this will see file handling in node 
// first need to take the file package to work on file 
const file = require("fs")

// synchronous method
// for creating and writing something in file 

// file.writeFileSync("./test.txt", "Hey Tanmay")

// Asynchronous
// file.writeFile("./test.txt", "Byy Tanmay", (error) => {})

// for reading the file 
// sync...

// const result = file.readFileSync("./contact.txt", "utf-8")
// console.log(result)

// now async...
// in this we cant store the result in variable 
// we have to give the call back function

// file.readFile("./contact.txt", "utf-8", (error, result) => {
//     if(error){
//         console.log("Error", err)
//     } else {
//         console.log(result)
//     }
// })

// for adding something to file
// file.appendFileSync("./test.txt", `Hello Tanmay\n`)

// for copying the file 
// file.cpSync("./test.txt", "./copy.txt")

// for deleting 
// file.unlinkSync("./copy.txt")

// for seeing statics of file 
// console.log(file.statSync("./test.txt"))

// for creating new folders
// file.mkdirSync("./Hello")

// blocking operations means synchronous
// when code hits the execution until it completes the operation
// it wont move further into the code 

// ex for blocking
// console.log(1)
// const result = file.readFileSync("./contact.txt", "utf-8")
// console.log(result)
// console.log(2)


// non-blocking means asynchronous
// it wont stop the further code 
// ex
console.log(1)
file.readFile("./contact.txt", "utf-8", (error, result) => {
    console.log(result)
})
console.log(2)