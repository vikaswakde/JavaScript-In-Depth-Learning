import fetch from "node-fetch";

// const pikachuArtwork = async () => {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     const result = await response.json();
//     console.log(result);
//     console.log("This is abilities", result.abilities)
//     console.log("Sprites here",result.sprites.other['official-artwork'])
// };

// pikachuArtwork();

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((pokemonObject) => {
    console.log(pokemonObject.sprites.other["official-artwork"].front_default);
  });
