// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8];

let numbers = array.filter( function(number) {

    console.log(typeof number);

    if(typeof number === "number"){

        return number
    }
});

console.log(numbers);