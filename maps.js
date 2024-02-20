// map !== array.prototype.map()

// map ---> is an object
/*
                // Map()  <- constructor 
const myMap = new Map();
console.log(myMap)

// add key, value pairs to map using keyword 'set'

myMap.set('name', 'vikas')
// console.log(myMap)

myMap.set('age', 20)
console.log(myMap)

const age = myMap.get('age')
console.log(age)

myMap.set('age',21)

console.log(myMap)

console.log(myMap.has('name'))
console.log(myMap.has('last name'))

console.log(myMap.size)

console.log(myMap.delete("age"))
console.log(myMap)


const newMap = new Map();

const map1 = new Map();

const map2 = new Map();

const map3 = new Map();


const map4 = new Map();



const map5 = new Map();



*/

///////////////// EXcercise //////////////////////////

/*
const mexico = new Map();

mexico.set('id', 24)
mexico.set('name', 'Mexico')
mexico.set('capital', 'Mexico City')
mexico.set('neighbours', ['USA', 'Guatemala', 'Belize'])



console.log(mexico)

mexico.set('id', 25)

mexico.get('neighbours').push('Honduras')

console.log(mexico)


*/

/*

const myPet = new Map();


myPet.set('name', 'Sudo')
myPet.set("type", "Dog")
myPet.set("breed", "Poodle")
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"])


console.log(myPet)


myPet.set('color', "Black")
myPet.set("breed", "Beagle")
myPet.get("friends").pop()

console.log(myPet)

myPet.get('friends').push("Chip")

console.log(myPet)

*/

/*
const banana = new Map()

banana.set("name","banana")
banana.set("quantity", 1)
banana.set("price", 1.95)


const apple = new Map()

apple.set("name", "apple")
apple.set("quantity", 1);
apple.set("price",1.45)


const candy = new Map()

apple.set("name", "candy")
apple.set("quantity", 1)
apple.set("price", 3.50)


*/

/*

const banana = {name: "banana", quantity: 1, price: 1.95}
const apple = {name: "apple", quantity: 1, price : 1.45}
const candy = {name: "candy", quantity: 1, price: 3.50}



const store = new Map()

store.set("storeNumeber", 5)
store.set("locationCity", "Milan")
store.set("locationCountry", "Italy")
store.set("products", [banana, apple, candy])

console.log(store)


console.log(store.get("products"))

console.log(store.get("products")[2])

// console.log()
store.get("products")[0]["price"] = 1.75

console.log(store)
 

// console.log(store) 

store.get("products")

*/
/*
const houseForSale = new Map();

houseForSale.set("area", 940)
houseForSale.set("value", 320000)
houseForSale.set("streetName", "Fifth Street")
houseForSale.set("built", "2012")
houseForSale.set("owner", {name: "Blake", age: 29})
houseForSale.set("offers", [290000,295000, 315000,312000 ])


console.log(houseForSale)

houseForSale.delete("built")

houseForSale.get("owner").age = 30

const maxOffer = houseForSale.get("offers").reduce((acc,curr)=>{
    return acc > curr ? acc : curr
},0)


console.log(maxOffer)

houseForSale.set("sale price", 312000)

console.log(houseForSale)

*/
/*
const myConsole = new Map();

myConsole.set("log", (message)=>{return message})



console.log(myConsole)


console.log(myConsole.get("log")("Hello World"))

myConsole.set(1, "number one")
myConsole.set("1", "string one")

console.log(myConsole)


*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];


// find the first duplicate value in 'numbers' 
// and print out the "INDEX" of that value 
// as well as the "INDEX" of where it was first found 

const seenNumbers = new Map();

for (let i = 0; i<numbers.length; i++){
    if (seenNumbers.has(numbers[i])){
        console.log(i , seenNumbers.get(numbers[i]))
    } else {
        seenNumbers.set(numbers[i], i)
    }
}
