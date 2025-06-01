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

//const readlineSync = require('readline-sync');

//const input = readlineSync.question("Choose a city");
weatherReport = [

chicagoWeather = {
    city: "Chicago",
    temperature: 74,
    conditions: "satisfactory",
    windspeed: "real real fast",
    humidity: "15%",
},

newYorkWeather = {
    city: "New York",
    tepmerature: 62,
    conditions: "Fair",
    windspeed: "Slow",
    humidity: "47%",
},


weatherData = {
    city: "Tokyo",
    temperature: 79,
    conditions: "Beautiful",
    windspeed: "real real slow",
    humidity: "60%",
},

];



let city = argv.city;

console.log(`This is the weather report for ${city}.`);
for (const city in weatherdata) {
    console.log(`${city}: ${weatherData.city}`)
};


//hard code the weather in objects and craft a means to print them by user input 