// sets -->  only allows unique values 

/*
const mySet = new Set();


mySet.add(10)
mySet.add(20)
mySet.add(30)
mySet.add(40)

console.log(mySet)

console.log(mySet.size)

console.log(mySet.has(10))
console.log(mySet.has(200))

console.log(mySet.entries())

*/

/*
const numbers = new Set();

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.add(2)
numbers.add(3)
numbers.add(4)

console.log(numbers)

*/

/*

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10]

const uniquePoints = new Set();
for(let i = 0; i< points.length;  i++){
    uniquePoints.add(points[i])
}

console.log(uniquePoints)



// /////////// Set() <- constructor takes any element that is "itertable" --> Example like [list] --> so we can pass it as an parameter



const cheatUniquePoints = new Set(points)

console.log(cheatUniquePoints)

*/
/*

const numbers = [10,20,15,30,15,20,35,60,10]

// "brain" storage
const seenNumber = new Set();

// "Looking" at each item
for(let i = 0; i < numbers.length; i++){

    // ask brain has the number been seen before?
    if (seenNumber.has(numbers[i])){
        // if yes --> then yah! we found the duplicate, here, before one similar number has already been found
        console.log(numbers[i])
    } 

    // ok! so we have not seen the number ? right! then we need to store it, so next time when we want to check for other number we get it,
    seenNumber.add(numbers[i])
}
*/
/*
const items = [
    {name: "banana", quantity: 1, price: 1.95},
    {name: "apple", quantity: 1, price: 1.45},
    {name: "banana", quantity: 10, price: 0.05},
    {name: "candy", quantity: 1, price: 3.50}
]

const result = []

// brain storage
const duplicate = new Set();

// check each item
for(let i = 0; i< items.length; i++){
    
    // check if 'name' is present in our 'duplicate' set?
    if (duplicate.has(items[i].name)){
        // if yes? please keep going
        continue
    }
    // now if "name" is not present in our 'duplicate' set, that means it's unique name
    // so push that name to 'results' array 
    result.push(items[i])

    // also remember to add that 'name' to 'duplicate' set so we can check for next 'number'
    duplicate.add(items[i].name)
}

console.log(result)




cconst result = []

const duplicate = new Set();

for (let i = 0; i < items.length; i++){
    if (duplicate.has(items[i].name)){
        continue
    }
    result.push(items[i])
    duplicate.add(items[i].name)
}
console.log(result)
*/

