// const appUser = Object()

const appUser = {}
// console.log(appUser);

appUser.id = "123abc"
appUser.name = "rohit"
appUser.isLoggedIn = "false"

// console.log(appUser);

const regularUser ={
    email: "rohit@gmail.com",
    fullname:{
        userFullname:{
            fullname:"rohit",
            lastname:"kumawat"
        }
    }

}

// console.log(regularUser.fullname.userFullname.fullname);

const  obj1 = {1:"a", 2:"b"}
const  obj2 = {3:"a", 4:"b"}
const  obj4 = {5:"a", 6:"b"}


// const obj3 = {obj1,obj2};

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4) // by using {} is done for the like it is used as target and the source is assigned to it. if we did not use this the outcome will be the same hence it is used for the best practices.

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id:1,
        email:"r@gmail.com",

    },
    {
        id:1,
        email:"r@gmail.com",
        
    },
    {
        id:1,
        email:"r@gmail.com",
        
    }
]

users[1].email

console.log(appUser);

console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));


