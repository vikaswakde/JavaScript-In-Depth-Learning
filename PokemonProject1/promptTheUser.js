import fetch from "node-fetch";
import inquirer from "inquirer";
import { json } from "stream/consumers";

// const question = {
//   type: "input",
//   name: "pokemon_name",
//   message: "Pokemon Name: ",
// };

// inquirer.prompt(question).then((answer) => console.log(answer));

// name --> input
const promptForPokemon = async () => {
  return await inquirer.prompt({
    type: "input",
    name: "pokemonName",
    message: "Pokemon name: ",
  });
};

// checkbox
const promptForDownloadInfo = async () => {
  return await inquirer.prompt({
    type: "checkbox",
    name: "options",
    message: "Pokemon info to download",
    choices: [
      new inquirer.Separator("--Options--"),
      {
        name: "Stats",
      },
      {
        name: "Sprites",
      },
      {
        name: "Artwork",
      },
    ],
  });
};

// continue
const promptToContinue = async () => {
  return await inquirer.prompt({
    type: "list",
    message: "Would you like to search for another pokemon?",
    name: "continue",
    choices: ["Yes", "No"],
  });
};

// Fetch Pokemon
const fetchPokemon = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  // console.log(url)
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// Prompt User

const promptUser = async () => {
  while (true) {
    const name = await promptForPokemon();
    // console.log(name.pokemonName);

    const pokemonJson = await fetchPokemon(name.pokemonName);
    // console.log(pokemonJson.name, pokemonJson.weight);

    const infoDown = await promptForDownloadInfo();
    // console.log(infoDown);

    const checkContinue = await promptToContinue();
    // console.log(checkContinue.continue);

    if (checkContinue.continue === "No") break;
  }
};

export {fetchPokemon}