import {topMovies} from "./moduleB.js";

// const checkMovie = (movieName) => {
//     for(const movie in topMovies){
//         if (topMovies.includes(movieName)){
//             return true;
//         } else{
//             return false;
//         }
//     }
// }

const checkMovie = (movieName) => {
    return topMovies.includes(movieName);
}



export {checkMovie};