// 02 - Table

var {addition, multiply} = require("./table.until");

var table = process.argv.slice(2);

function multiply(num){

    for(var i = 1; i <= 10; i++)

    console.log(num * i);
}

// multiply(table[0])

addition(table[0])