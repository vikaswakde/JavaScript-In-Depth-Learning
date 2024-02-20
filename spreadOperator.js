/*
const stock = new Map();
console.log(typeof(stock))
stock.set("Apples", 3)
stock.set("Mangoes", 20)

const stockArray  = [...stock]
console.log(typeof(stockArray))
console.log(stockArray)

*/

/*
const countryPop = {
    Germany: 83,
    Brazil: 212,
    Egypt: 102
}

const countryPopExtended = {
    ...countryPop,
    India: 101,
    Russia: 212,
    USA: 444
}

console.log(countryPopExtended)

*/

/*

const prices = [[10],[20],[30],[40]]

const copy = [...prices]

console.log(copy);

*/
/*
const points = [10,15,20,30,5]

const pointsCopy = [...points,50,75]


console.log(points)
console.log(pointsCopy)

*/
/*
const views = [[5,10,20], [10,20,30]]

const viewsCopy = [...views]

// console.log(views)
// console.log(viewsCopy)

// this modifeis the sub array which is refernced to views, 
viewsCopy[1].push(40)
viewsCopy[0].pop()

// this creates a new sub array 

viewsCopy.push([100,200])

console.log(views)

console.log(viewsCopy)

*/
/*
const animal = {
    name: "Koala",
    kingdom: "Australia",
    cute:true,
    friends: [{name:"Kangaroo",kingdom:"Australia", cute: true}]
}


const koala = {...animal, tail:false}

animal.cute = false;

console.log(animal)

// suprise is beacuse, 
//  you copied the "cute" property from the 'animal' object, not the refernce, 
// since 'false' is a primitive value, (not an object) 
// changing it in the animal object doesn't affect the kola object.
console.log(koala)

*/

const superHero = {
  name: "Bruce Wayne",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwoman", "Bane"],
  bestMovie: { title: "The Dark" },
};

const superHeroCopy = {
  ...superHero,
  enemies: [...superHero.enemies, "Poison Ivy"],
  bestMovie: { ...superHero.bestMovie, year: 2008 },
};

console.log(superHero);
console.log(superHeroCopy);
