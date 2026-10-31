// what is module?
// with this we can split aur code into different files and 
// do import & export

// for example:-
// lets create function

function add(a,b){
    return a + b;
}

// with the help of require keyword we can import this in hello.js
// but for that first we need to export this also


// now let us create one more function 
function sub(a,b){
    return a - b
} 

// module.exports = add
// module.exports = sub
// if you will do like this add func will be override by sub func so its wrong

// instead of this for exporting we can make a object

module.exports = {
    // passing the functions
    // we also give new name
    addfunc: add,
    subfunc: sub
}

// we have also another way to directly export the functions 

// exports.add = (a,b) => a + b
// exports.sub = (a,b) => a - b


