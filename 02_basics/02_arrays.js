const marval_heros = ["thor","ironman","bloody_marry"]
const dc_heros = ["superman","flash","batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros);
// console.log(allHeros);

 const allNewHeros =[...marval_heros, ...dc_heros]

// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));

console.log(Array.from({name: "rohit"}));          // intersting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
