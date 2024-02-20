// /*

// const person  = {  // <- object
//              //  properties
//                 id: 42,
//  /* key-->*/    name: "Alex",
//                 age: 19            /* <- value */

//                 }
// */
// /*

// person.numHands = 2;

// // delete person numHands

// console.log(Object.keys(person))
// console.log(Object.values(person))

// console.log(Object.entries(person))

// */

/*

const mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbours : ["USA", "Guatemala", "Belize"]
}

console.log(mexico)
mexico.id = 25
mexico.neighbours.push("honduras")

console.log(mexico)

*/
/*
const myPet = {
    name: "Sudo",
    type: "Dog",
    breed: "Poodle",
    friends : ["Bit", "Byte", "Data"]
}

console.log(myPet);
myPet["color"] = "Black"
myPet["breed"]  = "Beagle";
myPet.friends.pop()
myPet.friends.push("Chip")
console.log(myPet)
*/
// Only print out all the product objects in "store"
// for(let i = 0; i < store.products.length; i++){
//     console.log(store.products[i])
// }


// Only print 3rd products object in "store"

// console.log(store.products[2])
// 

/*

const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};

const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45,
};

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.5,
};

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

console.log(store.products[0].price = 99)

*/
/*
const houseForSale = {
  area : 940,
  value : 320000,
  streetName : "Fifth Street",
  built : "2012",
  owner: {name: "Blake", age: 29},
  offers: [290000,29500,315000,312000]
}

console.log(houseForSale)

delete houseForSale.built

houseForSale.owner["age"] = 30

// const maxOffer = houseForSale.offers.reduce((maxOffer, offer)=>{
//   if(maxOffer > offer){
//     return maxOffer
//   }
//   return offer 
//   // return maxOffer > offer ? maxOffer : offer;
// },0)

const maxPrice = houseForSale.offers.reduce((max, price)=>{
  return max > price ? max : price
},0)



console.log(maxPrice)

houseForSale["sale price"] = 312000

console.log(houseForSale["sale price"])

console.log(houseForSale)
*/



const myConsole = {
  log: (message) => {
    return message
  },
}
console.log(myConsole.log("Hello, World"))

