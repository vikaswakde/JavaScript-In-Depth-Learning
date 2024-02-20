const fs = require('fs-extra');

const file = "hello.txt";
const data = [1,2,3]

// fs.appendFile(file, data, function(err){
//     if (err){
//         console.log(err)
//     } else{
//         console.log("File created")
//     }
// })

fs.appendFile(file, data, function(err){
    if(err){
        console.log(err)
    } 
    console.log("file created!")
})


