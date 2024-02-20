// const nums = [1, 2, 3, 4, 5];

// // const sum = (array, index) => {
// //   // base condition,
// //   if (index === array.length - 1) {
// //     // is 0 === 4 ? no : continue
// //     // is 1 === 4 ? no : continue
// //     // is 2 === 4 ? no : continue
// //     // is 3 === 4 ? no : continue
// //     // is 4 === 4 ? yes :
// //     return array[index];
// //     // 5
// //   }

// //   return array[index] + sum(array, index + 1);
// //   //  1          + ([1,2,3,4,5], 1) --> 1 + 3 => 4
// //   //  2         + ([1,2,3,4,5], 2)  -> 2 + 5 ==> 7
// //   //  3         + ([1,2,3,4,5], 3)  -> 3 + 7 ==> 10
// //   //  4         + ([1,2,3,4,5], 4)  -> 4 + 10 => 14
// // }

// // const result = sum(nums, 0);

// const nums = [1,2,3,4,5];

// const sum = (array, index) => {

//     // base
//     if (index === array.length - 1){
//         //  is 0 === 4 ? no : continue;
//         //  is 1 === 4 ? no : continue;
//     }

//     // recursive case
//     const total  = array[index] + sum(array, index + 1)
//         // total  = 1 + 2 => 3
//         // total = 2 + 3 => 5
//         //  total =

// }

// const result = sum(nums, 0)
// console.log(result)

// const nums = [1,2,3,4,5,6];

// const sum = (array, index) {

//     // base
//     if (index === array.length - 1){
//         return array[index]
//         // at 5 --> 6
//                                     //  (4 + 1) -> 5
//                                 // (3 + 1) --> 4
//     }                          //    + (2 + 1) -> 3
//                                 // + (1+1) -> 2
//     const total = array[index]  + sum(array, index + 1);
//     //                 4       +  5      ->

// }

// const nums = [1, 2, 3, 4, 5, 6];

// const sum = (array, index) => {
//   if (index === array.length - 1) {
//     return array[index];
//   }

//   return array[index] + sum(array, index + 1);
// };

// console.log(sum(nums ,0))

const nums = [1, 2, 3];

const sum = (array, index) => {
  if (index == array.length - 1) {
    return array[index];
  }

  return array[index] + sum(array, index + 1);

  // return 1    + sum([1,2,3], 1)  1 + 5

//        :<------------------
//   return 2     + sum([1,2,3], 2)  --> 3  --> 2+3 => 5

        // : <--------------------
//   return 3;
};

const result = sum(nums, 0)
