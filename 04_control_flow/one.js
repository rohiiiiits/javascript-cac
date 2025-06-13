// if 

// const ifUserLoggedIn = true
// const temperature = 11

// if (temperature < 50){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
    

// }
// console.log("excute");


// < , > , <= , >= , == , != , === , !==.  (imortant) ==================-----========-=======-======-==========


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }


// const balance = 740

// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else if (balance < 1200){
//     console.log("less than 1200");
// }


const ifUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (ifUserLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in ");   
}