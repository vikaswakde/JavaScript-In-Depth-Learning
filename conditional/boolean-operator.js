// strict equals to ---> ===
// strict not equals to ----> !==

// greater than ---> > 
// less than ---->  <
// greather than or equal to ----> >=
// less than or equal to ---> <=

// logical opertor 
// and ----> &&
// or ----> ||
// nullish coalescign ----> ??


// FALSY values
// false
// 0
// ""
// null
// undefined
// NaN



// LOGICAL Assignments
// retuns the right side value

let fruit = "bananas" && true

console.log(fruit)  // ---> returns true not 'bananaas'

fruit = true && "bananas"

console.log(fruit)   // ----> now retuns 'bananas'








// Nullish Coalescing
// ----> if left side value is 'null' or 'undefined' then only retuns the right hand side values, 
//  Nullish or ?? can be used to set default values, incase the values are not present 


// // example/
// function greet(name){
//     let nameToUse = name ?? 'Guest';
//     console.log(`Hello, ${nameToUse}`)
// }

// greet();  // ---> Hello, Guest

// greet('Vikas') // ---> Hello, Vikas

