/*
const happyCheck = (happy) => {
    return (happy == true) 
    ? "Yah!"
    : "Nope"
}

console.log(happyCheck(true))

*/
/*

const numbers = [5,10,15,20,25]

const underOver = numbers.map((number)=> (
    number > 10 ? "Over" : "Under!"
))

console.log(underOver)

*/

/*
const hungry = true;

if (hungry){
    console.log("Have a cookie!")

}else{
    "No cookies for you!"
}

*/

/*


const hungry = false;

hungry ? console.log("Have a cookie!") : console.log("No Cookies for you!");

*/

/*

const over9000 = (power) => (
    power > 9000 ? "It's over 9000!!!" : "Taking a Nappa"
)
console.log(over9000(42))


*/
/*
const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"];

const updatedWizards = wizards.map((wizard)=> (wizard.includes("a") ? wizard.replaceAll("a", "*") : wizard.toUpperCase()))


// const updateWizards = wizards.map((wizard) => {
//   if (wizard.includes("n")) {
//     return wizard.replaceAll("n", "*");
//   } else {
//     return wizard.toUpperCase();
//   }
// });

console.log(updatedWizards);
*/




const characters = ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"];

const filterChar = characters.filter((char)=>( char.includes(" ") ))

console.log(filterChar)