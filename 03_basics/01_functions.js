


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

//  console.log("Result: ",result);


 
function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username");
        return
        

    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("rohit"))

// console.log(loginUserMessage())

// next videos starts from down here

function calculateCartPrice (val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "rohit",
    price: 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}
// handelObject(user)

handelObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

