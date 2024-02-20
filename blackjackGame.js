// generateDeck
const generateDeck = () => {
  // create deck, suits, & cards
  const deck = [];
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const cards = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "King",
    "Queen",
    "Ace"
  ];

  //   create cards object with cards as keys and suits as values
  for (const suit in suits) {
    for (const card in cards) {
      deck.push({ card: card, suit: suit });
    }
  }
  return deck;
};
const myDeck = generateDeck();

// drawCard
const drawCard = (deck) => {
  const randomIndex  = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  console.log(`this is card ---> ${card}`)
  return card

}


// Initialize deck & hands
const playerHand = [];
const delarHand = [];

// push 2 initial cards to hands
playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));

delarHand.push(drawCard(myDeck));
delarHand.push(drawCard(myDeck));

// checkScore
const checkScore = (hand) => {
  let total = 0
  for(const objectCard of hand){
    if (objectCard === "King"){
      total += 10
    }else if (object === "Queen") {
      total += 10
    } else if (object === "Jack"){
      total += 10
    }
  }
}




// Before Starting Annouce the Hand Values of each // logs
console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", checkScore(playerHand));

console.log("Starting Delar Hand: ", delarHand);
console.log("Starting Delar Score: ", checkScore(delarHand));

// Let them play


//   Annouce the Hand Values of each // logs
console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", checkScore(playerHand));

console.log("Ending Delar Hand: ", delarHand);
console.log("Ending Delar Score: ", checkScore(delarHand));
