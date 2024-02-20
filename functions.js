/*
// function declartion
const sayHello = () => {
    console.log('Hello, jello!')
};


// calling the function  
// sayHello();

const print = (message) => {
    return message
}

console.log(print("omg, does this work?"))

*/

/*

const sum = (num1, num2) => {
    return num1 + num2
}


const result = sum(11,22)

console.log(result)

*/

/*



const mul = (num1, num2) => {
    return num1 * num2
}

const result = mul(23,44)

console.log(result)


*/
/*
const chill = () => {
  console.log("Doing some chilling");
  for (let i = 1; i <= 10; i++) {
    console.log(`"Chill...${i}"`);
  }
  console.log("That was ice cold!");
};

console.log(chill());
*/

/*
const noRemainder = (number, mod) => {
    if(number % mod === 0){
        return true;
    }
    return false;
}


const result1 = noRemainder(10,7) //false

const result2 = noRemainder(100,10) // true

console.log(result1)
console.log(result2)

*/


/*

const login = (username, password) => {
    if(username === "admin"){
        return true
    } else if (username === "monkey" && password === "123"){
        return true
    } else if (username === "moomoo" && password === "farm"){
        return true
    }
    return false;
}


const test  = login("hello", "meow") // false
const test2 = login("admin", "lol") // true
const test3 = login("monkey", "123") // true
const test4 = login("moomoo", "farm") // true
const test5 = login("moomoo", "moo") // false

console.log(test, test2, test3, test4, test5)


*/


const square = (num) => {
    return num ** 2;
}


const sumOfSquares = (num1, num2) => {
    return square(num1) + square(num2)
}

const sum1 = sumOfSquares(2,3) // 13
const sum2 = sumOfSquares(3,4) // 25

console.log(sum1)
console.log(sum2)
