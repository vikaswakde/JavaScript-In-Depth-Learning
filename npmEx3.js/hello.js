import { Command } from "commander";

const program = new Command();

// console.log(typeof(Command))

program.option('-n, --name <name>', 'your name');
program.parse();

const options = program.opts();

console.log(`Hello, ${options.name}`)