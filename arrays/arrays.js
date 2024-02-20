// list --> array --> []
/*
const animals = ["monkey", "dog", "cat", "koala"];

// how to get last item here:
// const monkey = animals[]

// console.log(monkey)

animals.push("cow")
animals.pop()
animals.unshift("llama")
animals.shift()

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

*/
/*
const planets = ["Mercury", "Venus", "Earth", "Mars"]

planets.push("Jupiter")

planets.unshift("Sun")

planets.pop()
planets.pop()

planets.shift()
planets.shift()


*/



/*

const multiple = 15
const numbers = []
for(let i=10;i<=15;i++){
    numbers.push(i)
}
for(let i=0; i<numbers.length; i++){
    const result = multiple * numbers[i]
    console.log(`${numbers[i]} x ${multiple} = ${multiple*numbers[i]}`)
}








*/
/*
const greeting = "Hello, nice to meet you!"

// console.log(greeting.length)
for(let i = 0; i< greeting.length; i++){
    console.log(greeting[i])
}

*/
/*
let  total  = 0

const grades = [55, 63, 82, 98, 91, 43];

const gradesLength = grades.length

for(let i = 0; i < grades.length; i++){
     total +=  grades[i]
}

const avg = total / gradesLength;

console.log(avg)
*/

/*
const bakery = ["Cake", "Cookie", "Bread", "Scone"];
console.log(bakery)

const myBakery = bakery

myBakery.push("Croissant", "Granoia")

console.log(bakery)

console.log(myBakery)


*/

// map() --> creates new array

/*
const numbers = [5,10,15,20,25];

const timesTen = numbers.map((number)=>{
    return number * 10;
})

console.log(timesTen)

*/

/*

const practice = []

for(let i=25; i<=30; i++){
    practice.push(i)
}


const practiceSquare = practice.map((number)=> {
    return number ** 2
})

console.log(practice)

console.log(practiceSquare)

*/
/*
const bools = [true, true, false, true, false, false]


const boolsManipulate = bools.map((bool)=>{
    if (bool){
        return Math.floor(Math.random() * 100)
    }
    return 0
})


console.log(boolsManipulate)

*/
/*
const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]

const taxedPrices = prices.map((price)=>{
    if(price > 10){
        return price * 1.2
    } 
    return price
})

console.log(taxedPrices)

*/

/*
const items = ["light", "banana", "phone", "book", "mouse"];

const plurals = items.map((item)=> {
    if (item === "mouse"){
        return "mice"
    } 
    return item + 's'
})

console.log(plurals)

*/

const row = [10,20,30,40,50];

let matrix = row.map((item)=>{
    return [item]
})

console.log(row)
console.log(matrix)