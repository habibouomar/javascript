// 03 - Separate Table

var table = process.argv.slice(2);

function multiply(num){

    for(var i = 1; i <= 10; i++)

    console.log(num * i);
}
multiply(table[0])


function addition(num){

    for( var i = 1 ; i <= 10; i++)

    console.log( parseInt(num) + i);

}
addition(table[0]);

module.exports = {addition, multiply};


