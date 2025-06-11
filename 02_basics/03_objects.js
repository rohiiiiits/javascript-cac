// singleton
// object.create



// object literals

const mySym = Symbol("mykey1")

const JsUser = {
    name:"rohit",
    "full name": "Rohit Kumawat",
    [mySym]: "mykey1",
    age:"20",
    email: "rohit@gmail.com",
    isLoggedIn: "false",
    lastLoginDays:["monday","friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rohitdoes@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "rohitgoes@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name} `);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

