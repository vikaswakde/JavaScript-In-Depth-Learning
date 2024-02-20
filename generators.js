/*k// generator function Declartion
cikst counter = function* () {
  yield 1;
  yield 2;
  yield 3;
};

*/

/*
const counterGenerator = counter();

let counterObject = counterGenerator.next();

while (counterObject.done === false) {
  console.log(counterObject.value);
  counterObject = counterGenerator.next()
}

console.log("Well done!")

// // // create generator object
// // const counterGenerator = counter();
// // console.log(counterGenerator.next());
// // console.log(counter().next())

// const counterGenerator = counter();

// // for(const count of counterGenerator){
// //     console.log(count)
// // };
*/

/*
const counter = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};
const counterGenerator = counter();

let count = 0;

while (count < 10) {
    console.log(counterGenerator.next())
    count++;
}
*/

/*
const counter = function* () {
    yield 1; 
    yield* [2,3,4];
    yield 5;
};

const generatorObject = counter();

for(const value of generatorObject){
    console.log(value);
}









*/
/*

const countTo10 = function* () {
    i = 0
    while(i <= 10){
        yield i;
        i++;
    }
}

const counterGenerator = countTo10()

for(const num of counterGenerator){
    console.log(num)
}

*/

// console.log(Math.floor(Math.random()*100))
/*

const randomNumber = function* () {
    let i = Math.floor(Math.random() * 100)
    while(true){
        yield i;
    }
}
let randomGenerator = randomNumber();
let rn = 0
while (rn < 10){
    console.log(randomGenerator.value);
    randomGenerator = randomNumber().next();
    rn++;
}



*/
/*
const randomNumber = function* () {
  while (true) {
    yield Math.floor(Math.random() * 1000);
  }
};

const generateObject = randomNumber();
*/
// using for loop
/*
for(let i=0; i< 10 ; i++){
    console.log(generateObject.next().value)
}
*/

/*

// using for of loop
let i = 0
for (const item of generateObject) {
  console.log(generateObject.next().value);
  i++;
  if (i === 10) {
    break;
  }
}


*/

/*
// using while loops 
let i = 0
while (i < 10){
    console.log(generateObject.next().value)
    i++
}

*/
/*


const randomFromRange = function* (amount, min, max) {
  for(let i  = 0; i< amount; i++){
    yield Math.floor(Math.random() * (max-min + 1) + min);    
  };
};

const generateObject = randomFromRange(10,2,8000);

for (const value of generateObject){
  console.log(value)
}




*/

////////////// Random Grocery NUmber and Item Dispalyer /////////////////////////////////////////////
/*
const getRandomNumber = function* () {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
};

const rnGeneratorObject = getRandomNumber();
// console.log(rnGeneratorObject.next().value)

const groceryList = function* () {

  const groceries = ["Avacado", "Cookie", "Milk", "Soup", "Soda"];
  // console.log(groceries)

  while(groceries.length > 0){
    const randomIndex = Math.floor(Math.random() * groceries.length);
    const randomGroceryItem = groceries[randomIndex];
    
    yield randomGroceryItem;

    groceries.splice(randomIndex,1);
  }
}



const glGeneratorObject = groceryList();

// console.log(glGeneratorObject.next()[])

for (let i = 0; i < 5; i++) {
  console.log(`${rnGeneratorObject.next().value} ${glGeneratorObject.next().value}`);
};
*/

//////////////////////////////////////////////////////////////////////////////////////////

const getRandomNumber = function* () {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
};

const groceryList = function* () {
  const groceries = ["Avacado", "Cookie", "Milk", "Soup", "Soda"];

  do {
    const randomIndex = Math.floor(Math.random() * groceries.length);
    const randomGroceryItem = groceries[randomIndex];
    yield randomGroceryItem;
    groceries.splice(randomIndex, 1);
  } while (groceries.length > 0);
};

const randomNumberGenerator = getRandomNumber();
const groceryListGenerator = groceryList();

for (let i = 0; i < 5; i++) {
  const randomNumber = randomNumberGenerator.next().value;
  const grocery = groceryListGenerator.next().value;

  console.log(`${randomNumber} ${grocery}`);
}
