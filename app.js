const yargs = require("yargs");
const chalk = require("chalk");

const argv = yargs.argv;
console.log(`You have selected the weather report for ${argv.city}`);

//console.log(`You entered the ${argv.city} city.`)
//hard code the weather in objects and craft a means to print them by user input 
//Use chalk to style the outputs
const weatherReportObject = {

chicagoWeather: {
    city: "Chicago",
    temperature: 74,
    conditions: "satisfactory",
    windspeed: "real real fast",
    humidity: "15%",
},

newYorkWeather: {
    city: "New York",
    tepmerature: 62,
    conditions: "Fair",
    windspeed: "Slow",
    humidity: "47%",
},


tokyoWeather: {
    city: "Tokyo",
    temperature: 79,
    conditions: "Beautiful",
    windspeed: "real real slow",
    humidity: "60%",
},

berlinWeather: {
    city: "Berlin",
    temperature: 68,
    conditions: "Chilly",
    windspeed: "high",
    humidity: "20%",
},

};

console.log(chalk.bgGreen.cyan.bold.underline(`Here is the current weather for ${argv.city}.`));
    
for (const cityKeyString in weatherReportObject) {
    let cityWeatherReport = weatherReportObject[cityKeyString];
    if (cityWeatherReport.city === argv.city)
    console.log(chalk.magenta.inverse(`\n-----------\n${cityWeatherReport.temperature}\n${cityWeatherReport.conditions}\n${cityWeatherReport.windspeed}\n${cityWeatherReport.humidity}\n-----------`));
   
};
 console.log(chalk.blue.bgRed.italic("Have a wonderful day!"));



/*
Responses to questions:

1) The package.json is there to track the dependencies of this program, that is all the internal and external modules that are "required" in order for this code to run. Were someone to fork and download this repository off of github, all they would need to do would be to run npm install and all the dependencies listed in the package.json would be downloaded, enabling the code to function properly. 

2) Having node_modules in the version control means that a huge number of files will be sent up to github unnecesarily. Trust me, I accidentally did it at the beginning and watched as what seemed like thousands of lines of text raced across my terminal. 

3) If I were to share this github repository with someone else who wanted to come along and refactor my code, they would need all the modules that this code depends on (including yargs and chalk). Instead of telling them what modules they need to go download, or even what versions to get, npm install uses the dependencies in the package.json to quickly and painlessly accomplish this. 

*/