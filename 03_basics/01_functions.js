


 function sayMyname() {
     console.log("R");
     console.log("O");
     console.log("H");
     console.log("I");
    console.log("T");

}
// sayMyname()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return  result
}

 const result = addTwoNumbers(3,5)

 console.log("Result: ",result);


 
function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return
        

    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("rohit"))

console.log(loginUserMessage())
