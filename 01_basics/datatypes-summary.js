// 1 primitive

// 7 types :

//  String 
// number
// boolearn
// null
// undefined
// symbol 
// BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;

// const id = Symbol ('123')
// const anotherId = Symbol ('123')


// // console.log(id === anotherId);

// const BigNumber = 3775487856456456446478787776n


// 2 reference type (non primitive)

// Array
// Obeject
// Functions

// const heros = ["ramlaal" , "nevamal" , "revaram"];
// let myObj = 
// {
//     name: "rohit",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof BigNumber);
// console.log(typeof outSideTemp);
// console.log(typeof id);
// console.log(typeof myFunction);
// console.log(typeof anotherId);




// ++++++++++++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap (non primitive )

let myYoutubeName = "rohitkumawatdotcom"

let anotherName = myYoutubeName

anotherName = "overpower"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "ram@rams",
    upi: "ram@ybl"

}

let userTwo = userOne

userTwo.email = "hitesh@uu"

console.log(userOne.email);
console.log(userTwo.email);

