import fs from "fs/promises";
import path from "path";
import { fetchPokemon } from "./promptTheUser.js";
// console.log(path.setp);
// console.log(process.cwd());

// function to save images

const saveImageFile = async (filePath, arrayBuffer) => {
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
};

const createFolder = async (folderName) => {
  const folderPath = path.join(process.cwd(), folderName);

  try {
    await fs.access(folderName);
  } catch {
    fs.mkdir(folderPath);
  }
};

const pokemonObject = await fetchPokemon("mew");
// console.log(pokemonObject)

const savePokemonStats = async (folderName, pokemonStatsObject) => {
  let statsData = "";
  for (const stat of pokemonStatsObject) {
    statsData += `${stat.stat.name} : ${stat.base_stat}\n`;
  }
  const data = statsData;
  await createFolder(folderName);

  const filePath = path.join(process.cwd(), folderName, "stat.txt");
  await fs.writeFile(filePath, statsData);
};

// savePokemonStats("mewtwo",pokemonData.stats);

const savePokemonArtwork = async (folderName, pokemonSpritesObject) => {
  const url =  pokemonStatsObject.other;


  // --> fetch image
  const response = await fetch(url);

  // --> convert image to buffer
  const arrayBuffer = await response.arrayBuffer();

  // --> create folder to save iamge in it.
  await createFolder(folderName);

  const filePath = path.join(process.cwd(), folderName, "artwork.png");

  // --> save the buffer
  await saveImageFile(filePath, arrayBuffer);
};

// function to save Pokemon Sprites

const savePokemonSprites = async (folderName, pokemonSpritesObject) => {
  for (const sprite of Object.entries(pokemonSpritesObject)) {
    console.log(sprite);
  }
};

savePokemonArtwork("mew",pokemonObject.sprites);
