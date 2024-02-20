// for(let num = 5; num <= 10; num++){
//     console.log(num)
// }

/*
for(let num = 10; num <= 40; num++){
    if (num % 2 === 0) {
        console.log(num)
    }
}

*/

/*


for(let i = 0; i<= 100; i++) {
    if (i === 50){
        console.log("Half way there!")
    } else if (i === 100){
        console.log("You made it!.")
    } else if (i % 10 === 0){
        console.log(`Checkpoint! ${i}`)
    }
}

console.log("All done!")


*/


for(let i = 1; i<= 100; i++){
    if(i === 50){
        console.log("Half way there!.")
        continue
    }
    if (i === 100){
        console.log("You made it!.")
        continue
    }
    if (i % 10 === 0){
        console.log(`Checkpoint! ${i}`)
    }
}

console.log("All done!")


