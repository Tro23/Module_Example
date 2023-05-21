const color = require('colors');

var food = ["cheese", "Biryani", "Mutton", "Shepherd's Pie"];

function randomInt(min,max){

    /* Creating a random integer from max and min
    
    var numOfValues = max - min + 1;
    var randomNum = Math.random();
    var randomVal = randomNum * numOfValues;

    //Math.floor to round the random number
    var roundRandomVal = Math.floor(randomVal);
    var finalNum = min + roundRandomVal;*/

    return(min + Math.floor((max - min +1) * Math.random()));
}

console.log(food[randomInt(0,3)].red);
console.log(food[randomInt(0,3)].green);