// const mine = {
//   gold: 3,
//   left: {
//     gold: 2,
//     left: {
//       gold: 4,
//     },
//     right: {
//       gold: 1,
//     },
//   },
//   right: {
//     gold: 5,
//     right: {
//       gold: 1,
//     },
//   },
// };

// const countGold = (level) => {
//   let countOnWall = level.gold;
//   console.log(`count on wall on top level: ${countOnWall}`)

//   if (level.left) {
//     countOnWall += countGold(level.left)
//     console.log(`count on wall on left side: ${countOnWall}`)
//   }

//   if (level.right){
//     countOnWall += countGold(level.right)
//     console.log(`right side : ${countOnWall}`)
//   }

//   console.log(`final count on wall ${countOnWall}`)
//   return countOnWall

// };

// const result = countGold(mine);

// console.log(result);

const mine = {
    gold: 3,
    left : {
        gold: 5
    },
    right: {
        gold: 2
    }
}

const countGold = (level) => {
    let total = level.gold
    // console.log(`root level gold: ${total}`)

    if (level.left) {
        total += countGold(level.left)
        // console.log(`left level gold: ${total}`)
    }
    if (level.right){
        total += countGold(level.right);
        // console.log(`right level gold: ${total}`)
    }
    console.log(`total gold: ${total}`)

    return total
    

}


const result = countGold(mine)





























