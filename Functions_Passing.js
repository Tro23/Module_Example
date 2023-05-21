const color = require('colors');


function upperMessage(message){
    var upper = message.toUpperCase();
    console.log(upper.red);
}

upperMessage("Passing data through parameters and also summation of 4,3,7 and 8 below:")


function addNums(num1, num2, num3, num4){

    var sum = num1 + num2 + num3 + num4 ;
    console.log(sum);
}

 addNums(4,3,7,8);