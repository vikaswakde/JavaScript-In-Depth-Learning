import inquirer from "inquirer";
import fs, { appendFile } from "node:fs";
import fetch from "node-fetch";
import path from "node:path";
// const fs = require('node:fs');

const questions = [
  {
    type: "input",
    name: "name",
    message: "Name the pokemon? ",
  },
  {
    type: "checkbox",
    name: "pok-info",
    message: "Pokemon Info to Download ",
    choices: ["Stats", "Sprites", "Artwork"],
  },
];



const pokemonName = {};

inquirer.prompt(questions).then((answer) => {
    function start() {
  const pokName = answer.name;
  let pokInfo = answer["pok-info"].map((pokinfo) => pokinfo);
  //   //   fs.mkdirSync(pokName)
  //   console.log(answer);
  //   console.log(pokName);
  //   console.log(pokInfo);

  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokName}`;

  //   console.log(typeof(pokeApi))

  const pokeArtWork = async () => {

    // fetching whole data
    const response = await fetch(pokeApi);
    const result = await response.json();
    const pokArtUrl = result.sprites.other["official-artwork"].front_default;
    // console.log(pokArtUrl);

    // fetching only Image 
    const imgResponse = await fetch(pokArtUrl);
    const imgBuffer = await imgResponse.arrayBuffer();

    fs.mkdir(pokName, (err) => {
        if (err && err.code !== "EEXIST"){
            throw err;
        }
        const imagePath = path.join(pokName, "offical-artwork.png");

        fs.writeFile(imagePath, Buffer.from(imgBuffer), (err) => {
            if (err) throw err;
            console.log(`Image created successfully at ${imagePath}`)
        })
    })


};
pokeArtWork();

    // fs.mkdir(pokName, (err) => {
    //     if(err){
    //         throw err;
    //     }
    //     const imagePath = path.join(pokName, 'offical-artwork.png');
    //     if (err) throw err;
    //     console.log("Image created successfully!")


    // })


    // fs.mkdir(pokName,() => {
    //     fs.writeFile("official-artwork.png", Buffer.from(imgBuffer))
    //     console.log("Image created successfully!")
    // })

    // fs.writeFile("poke-img.png", Buffer.from(getImgData));
    // console.log("image created sucess");


  //   fetch(pokeApi)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       let pokeImageUrl = result.sprites.other['official-artwork'].front_default
  //       return pokeImageUrl;
  //     });

  //   const imgDown = async () => {
  //   let imageUrl = result.sprites.other["official-artwork"].front_default;
  //   return imageUrl;
  //   console.log(imageUrl);
  // console.log(typeof imageUrl);
  //   const imageData = imageUrl.arrayBuffer();
  //   fs.writeFile("official-artwork.png", Buffer.from(imageData));
  //   console.log("official-artwork.png created succesfully!");

  // fs.mkdir(pokName, () => {
  //   fs.writeFile("official-artwork.png", Buffer.from(imageData));
  // });
  //   };
    }
start();

});

