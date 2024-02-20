/*
// any possible patterns
const sentence = "There once was a monkey who knew JavaScript....";

const pattern = /w[^a]s/;

const test = pattern.test(sentence);

const match = sentence.match(pattern);

console.log(match);
*/
// patterns
/*
.  --> any single character
? --> ZERO or ONE of single character;
* --> ZERO or MORE of single character;
+ --> ONE or MORE of single character;
\w --> Any word char;
\W --> Any non word char;
\d --> any digit char;
\D --> any non Digit char;


*/
/*
const sentence = "There once was a muney who knew Javascript ...";

// const pattern = /m[\w]nk*ey/;
// Here --> [\w] --> checks for any charcter betwenn w and n
// k* ---> checks if key is Zero or One char ---> it's not so it works


const pattern = /m.nk*ey/;


const match = sentence.match(pattern)

console.log(match)


*/

///////// Anchors

/*

^ --> Marks start of string
$ --> Marks end of string

//i --> ingnore case  / case insensitive pattern match
//g --> match and return all results (global)

//gi --> combies both 'i' and 'g' 

*/

/*
const sentence = "Once lived a monkey, once he visited a village called Rampur, rampur was a famous kindgom!";

const pattern = /...$/ig;
const rampurPattern = /rampur/ig

const match = sentence.match(pattern);
const match2 = sentence.match(rampurPattern);
console.log(match);
console.log(match2)
*/
/*
const quote = "What is this?  A center for ants?";

const pattern = /ant/;

const test = pattern.test(quote);

const match = quote.match(pattern);


console.log(test);
console.log(match)
k*/


/*
const emails  = "monkey@trees.com";

const emailPattern = /\.com$/;

const test = emailPattern.test(emails);

const match = emails.match(emailPattern);

console.log(test);
console.log(match)










*/


/*

const email = "monkey@tress.com";



const test = emailPattern.test(email);
console.log(test);



*/



const phoneNumber = "020-382-6940";

const phonePattern = /\d-\d-\d/;

const testPhoneNumber = phonePattern.test(phoneNumber);

console.log(testPhoneNumber)











































































