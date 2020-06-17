import { fifaData } from './fifa.js';

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


function getHtN2014(arr){
    var thatHomeTeam = arr["Home Team Name"];
        const home2014WorldCupFinal = thatHomeTeam.map(function(item){
            if(arr["Year"] = 2014 && arr["Stage"] == "Final"){
                return thatHomeTeam
            }else(console.log("whoops"));
            

        return thatHomeTeam;
});
return home2014WorldCupFinal;
}
console.log(getHtN2014(fifaData))
console.log()
console.log()
console.log()

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


function getFinals(data) {
const finalsData = data.filter(function(item){
     return item.Stage.toLowerCase().indexOf("finals") > 0;
});
return finalsData;
}
console.log(getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, finalsCallBack ) {
let finalsData = finalsCallBack(data);
let years = finalsData.map(({Year}) => `${Year}`);
    return years

};

console.log(getYears(fifaData, getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, finalsCallback) {
let finalsData = finalsCallback(data);
let winners = finalsData.map(function (element){

    var condition = element["Win conditions"];
    var homeTeam = element["Home Team Away"];
    var awayTeam = element["Away Team Name"];
    var isTie = condition && condition.length > 0;

    if (isTie){
        if(condition.indexOf(homeTeam) > 1) {
            return homeTeam;
        }else {
            return awayTeam;
        }
    }else {
        if (element["Home Team  Goals"] > element["Away Team Goals"] ){

        }else {
            return awayTeam;
        }
    }
});
return winners
};

console.log(getWinners(fifaData, getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, winnersCallback, yearsCallback) {
    let years = yearsCallback(data, getFinals);
    let winners = winnersCallback(data, getFinals);

    return years.map((e, i) => `In ${e}, ${winners[i]} won the world cup!`)

};

console.log(getWinnersByYear(fifaData, getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
var home = data.reduce(function(total, element){
return total + element["Home Team Goals"];
}, 0) / data.length;
    var away = data.reduce(function(total, element){
        return total + element["Away Team Goals"];
    }, 0) / data.length;
    return [`Average home team goals: ${home.toFixed(0)}, average away team goals: ${away.toFixed(0)}`];
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
