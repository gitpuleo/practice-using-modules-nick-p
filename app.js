const yargs = require("yargs");

const argv = yargs.option ('city', {
        alias: 'c',
        describe: 'Please input a city name:',
        type: 'string',
        demandOption: true,
    })
.help()
.argv;

console.log(`You entered the ${argv.city} city.`)

const readlineSync = require('readline-sync');

const input = readlineSync.question("Choose a city");


chicagoWeather = {
    city: "Chicago",
    temperature: 74,
    conditions: "satisfactory",
    windspeed: "real real fast",
    humidity: "15%",
};
