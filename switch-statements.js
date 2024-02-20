// works best with "Primitive types"
/*
const animal = "monkey";

switch (animal) {
    case "Tiger": {
        console.log("You are a tiger!!");
        break;
    }
    case "Monkey": {
        console.log("The best animal!!");
        break;
    }
    case "Snail": {
        console.log("I got you!!");
        break;
    }
    default: {
        console.log("You are lost in the maze!!");
        break;
    }
}

*/
/*
const food = "Sushi";

switch (food) {
    case "Fish": {
        console.log("Sounds fishy...");       
        break;
    }
    case "Hummus" : {
        
        console.log("Want chips with that? ");
        break;
    }
    case "Sushi": {

        console.log("With or without seaweed?");
        break;
    }
     default: {
        console.log("Food not in our database, sorry!");
        break;
    }
}

*/

/*

const activities = ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"];

for(const activity of activities){
    
    switch (activity) {
        case "Swimming": {
            console.log("Like a fish");
            break;
        } 
        case "Rock Climbing": {
            console.log("Like a mountain goat!");
            break;
        }
        case "Running": {
            console.log("Like a cheetah!");
            break;
        }
        default: {
            console.log("I'm sure some animal does that...")
            break;
        }
    }
}
*/

/*

const enemies = {
  rat: { atk: 3, def: 2, hp: 20, class: 1 },
  goblin: { atk: 10, def: 6, hp: 50, class: 1 },
  troll: { atk: 30, def: 20, hp: 200, class: 2 },
  giant: { atk: 50, def: 40, hp: 500, class: 2 },
};

// for (let enemy in enemies) {
//   let caseStatement = enemies[enemy].class;
//   console.log(caseStatement);

for(const enemy of Object.values(enemies)){
  switch (enemy.class) {
    case 1: {
      console.log("This is an easy fight");
      break;
    }
    case 2: {
      console.log("This will require some traning");
      break;
    }
    default: {
      console.log("Not implemented yet...");
      break;
    }
  }
}

*/

const points = [3,4,1,0,1,5,6];

for (const point of points){
    switch (point) {
        case 0:
            case 1:
                case 2: {
                    console.log("Good try!");
                    break;
                }
                case 3:
                    case4:
                    case5: {
                        console.log("Very well done!");
                        break;
                    }
                    default: {
                        console.log("Wow, shooting for the moon!");
                        break;
                    }
    }
}














