console.log("The following iss random from 0 to 1:");
console.log(Math.random());

console.log("The following iss random between given numbers 5,12:");


function randomInt(min,max){

    var numOfValues = max - min + 1;
    var randomNum = Math.random();
    var randomVal = randomNum * numOfValues;

    //Math.floor to round the random number
    var roundRandomVal = Math.floor(randomVal);
    var finalNum = min + roundRandomVal;

    console.log(finalNum);
}

randomInt(5, 12);