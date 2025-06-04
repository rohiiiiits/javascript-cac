const name = "rohit"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`hello my name is  ${name} and my repo count is ${50}`);

const gameName = new String('rohitintheweb')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-13, 4)

console.log(anotherString);

const newStringOne = "   rohit     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://tohidfid%20kumawat"

console.log (url.replace('%20','_'))
console.log(url.includes('rohit'))
