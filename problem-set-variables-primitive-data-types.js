/*
    Create a constant variable of each of the following primitive types:
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    Use console.log to log out each variable to the terminal at the end.
    HINT1: You can run your file in the terminal using this command: node <file_name>
            For example, if your file is called ps1.js, you would type: node ps1.js
    HINT2: Make sure your terminal is "looking at" the correct folder where your code is
*/


const name0 = "Vikas";
const age = 20;
const learning = true;
const projectsComplited = null;
const isGivingUpLearning = undefined;

console.log(`Hello this is ${name0} here!, my age is ${age}, and my learning status is ${learning}, I am happy about it, also the project's I have complited so far are ${projectsComplited}, Whenever I am low my friends think I gave up on "Coding" but my response to them is ${isGivingUpLearning}.
Thank you for coming to my small pep talk! bye`)




/*
1. Create a variable called name that points at a string containing your name
2. On the next line, re-assign the variable above to your favourite musician's name
3. On the next line, re-assign the variable again to the value: true
3. On the next line, re-assign the variable one last time to the value: 42
After each of the above steps, log out the variable to the terminal with console.log.
*/

let name = "Vikas";
console.log(name)
name = "AR.Rahman";
console.log(name)
name = true;
console.log(name)
name = 42;
console.log(name)


/*
1. Declare a variable using let with any name you like, but without a value.
2. On a separate line, assign the variable the String: "Moo!"
3. Log out this variable to the terminal using console.log
Repeat the above steps but try using a const variable. What happens?
*/

let varWithoutVal;
varWithoutVal = "Moo";

// console.log(varWithoutVal);

/*
Use Google/search to look up the *typeof* operator in Javascript.
Use typeof to log out the types for each of the 5 primitive types
to the terminal using console.log.
*HINT* - MDN Web Docs are a good resource
*/

console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(learning))
console.log(typeof(varWithoutVal))


