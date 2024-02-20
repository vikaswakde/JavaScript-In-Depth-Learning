/*
const message = "Today is wonderful day"

for(const char of message){

}
    console.log(char.toUpperCase())

    */


/*
const myMap = new Map();

myMap.set("name", "vikas")
myMap.set("age", 20);
myMap.set("friend", "Mr. Monkey")

console.log(myMap)

console.log("------")

for(const item of myMap){
    console.log(item[0], item[1])
}

*/
/*
const mySet = new Set();

mySet.add("hello")
mySet.add("Mr. Monkey")
mySet.add(10)
mySet.add(11)
mySet.add(true)

console.log(mySet)

for(const item of mySet){
    console.log(item)
}


*/



// objects ---> {}
/*
const stockItem  = {
    id: 54,
    price: 1.32,
    name: "Apple",
    quantity: 6,
}
console.log("00000000000")

for (const item of Object.entries(stockItem)){
    console.log(item)
}
console.log("00000000000")

for (const item of Object.keys(stockItem)){
    console.log(item)
}
console.log("00000000000")
for(const item of Object.values(stockItem)){
    console.log(item)
}

*/
/*
const numbers = [10,20,40,50,20,100];

// use for-of loop

for(const num of numbers){
    console.log(num**2)
}


*/


/*
const ages = [10,42,15,22,11,74,39,2]

const results = []
let dragonNumber = 1;

for(const age of ages){
    const ageObject = {
        age: age,
        name: `Dragon ${dragonNumber}`
    }

    results.push(ageObject)
    dragonNumber++
}

console.log(results)

*/
/*
const names = new Set();
const capsNames = new Set();


names.add("Bilo")
names.add("Spock")
names.add("Spock")
names.add("Leia")

for(const name of names){
    capsNames.add(name.toUpperCase())
}

console.log(capsNames)
*/

const backpack = new Map();

backpack.set(1, {name:"Sword", value: 300})
backpack.set(2,{name: "Banana", value: 5})
backpack.set(3,{name:"Gold Nugget", value: 10000})
backpack.set(4,{name: "Pants", value: 100})

let total  = 0

for(const item of backpack){
    const itemItSelf = item[1]
    console.log(`${itemItSelf.name}:$${itemItSelf.value}`)
    // console.log(`${item[1].name}: $${item[1].value}`)
    // console.log(item[1].name : `$ ${item[1].value}`)
    // console.log(`${item[1]}${item[1][1]}`)
    total+= itemItSelf.value
}


console.log(`Item: $${total}`)



// console.log(backpack)