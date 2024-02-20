import  chalk  from "chalk";

const log = console.log;

log(chalk.blue("Hello") + " World" + chalk.red("!"));

log(chalk.blue.bgRed.bold("Hello World"));

log(chalk.blue("Hello","world", "Foo", "bar", "biz", "ba"))


log(chalk.red("hello", chalk.underline.bgRed("world") + "!"))

log(chalk.green("I am green line" + chalk.blue.underline.bold("With a blue substring") + " That becomes green agian!"))


log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`)


log(chalk.rgb(123,45,67).underline("Underlined reddish color"));
log(chalk.hex("#DEAD").bold("Bold gray"));