/*
const jungle = ["Monkey","Lion", "Panda", "Rabbit", "Squirrel"]

const [,lion,,rabbit] = jungle

console.log(lion,rabbit)

*/










/*



const snack = {
    chips: {name:"Pringles", salty: true},
    candy: {name: "Twizzlers", salty: false},
    chocolate: {name: "Mars", salty: false},
}


const {candy, fruit={name: "Banana", salty: false}} = snack;

console.log(candy, fruit)







*/

/*

const store =  new Map();
store.set("Cups",46)
store.set("Candles", 121)
store.set("Vases", 15)


console.log(store)

for (const [item, value] of store) {
    console.log(item, value)
}


*/
const xyzCalc = ({x, y, z})=> {
    return 5*x - 2*y -z;
}


console.log(xyzCalc({x:20, y:2,z:7}))











