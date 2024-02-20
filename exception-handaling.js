/*
try{
    console.log("I am here, waiting to load after try/catch`")
    const profile = {
        name: "Vikas",
        age:20
    }
    console.log(profile.picture.color)
} catch(error){
    console.error(error)
}
*/

/*


// scoping

const message = "meow"

try {
    console.log(message)
    throw new Error("Oh no!!")
} catch(error){
    console.error(error)
    console.log(message)
}

console.log("One last time meow")
console.log("Program completed")
console.log(message)




*/
/*

console.log("Program started")

try {
    throw new Error("Uh oh!")
} catch(error){
    console.log(error)
    
}

console.log("program compelte")


*/

/*
for(let i =0; i<= 10; i++){
    try{
        if (i === 5){
            throw new Error("Boom")
        }
        console.log(i)
    } catch(error){
        console.error(`Error on line number ${i}`)
    }
}


*/

/*
try {


const user = { name: "Misha", age: 22, settings: { color: "blue" } };

console.log("Creating user...");

  console.log(user.profile.color);

  console.log("User Created");

} catch (error) {
  console.error(error);
}

console.log("Program compelte")



*/

let number = 1337;


try{
    number += Math.floor(Math.random() * 1001)
    console.log(number)
    if (number < 2000){
        throw new Error("You Loose")
    }
    console.log("You Win!!")
}catch(error){
    console.log(error)
    console.log(`We lost with the number ${number}`)
}















