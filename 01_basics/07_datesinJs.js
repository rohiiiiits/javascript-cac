// dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2025,5,4)

// let myCreatedDate = new Date(2025,5,4,4,30,59)

// let myCreatedDate = new Date("2025-05-04");

// let myCreatedDate = new Date("05-04-2025");




// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getUTCDay());



// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    
})






