/*
let number = 0

while (number < 3){
    console.log('Huraay')
    number++
}

console.log("All Done")

*/

/*

let score = 0

while(true){
    console.log(score)
    if (score >= 2){
        break;
    }
    score++
}


console.log("Done the loop!")

*/

/*


let num = 5

while(num <=10){
    console.log(num)
    num++
}
*/

/*
let loggedIn = false;
let count = 0;

while (!loggedIn) {
  console.log("Incorrect Login Credentials");

  if (count === 2) {
    loggedIn = true;
  }
  count++;
}

console.log("Sucessfully logged In!");
*/
/*
let counter = 10;

while (counter <= 40) {
  if (counter >= 10 && counter <= 40) {
    if (counter % 2 !== 0) {
      console.log(counter);
    }
  }
  counter++
}
*/
/*

let number = 10

while(number <= 40){
    if(number % 2 === 0){
        console.log(number)
    }
    number++
}



*/



/*




let number = 1

while(number <= 100){
    if(number === 50){
        console.log("Half way there!")
    } else if(number === 100){
        console.log("You made it!")
    } else if (number % 10 === 0){
        console.log(`Checkpoint! ${number}`)
    }
    number++
}

console.log("All done!")

*/








let count = 1;

while(count <= 100){
    if(count === 50){
        console.log("Half way there!");
        count++
        continue
    }
    if(count === 100){
        console.log("You did it!")
        count++
        continue
    }
    if(count % 10 == 0){
        console.log(`Checkpoint! ${count}`);
    }
    count++;
}

console.log("All done!")












