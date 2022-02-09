// 04 - Filter Numbers

const array = [1, "toto", 34, "javascript", 8];

const numbers = array.filter( function(number) {

    console.log(typeof number);

    if(typeof number === "number"){

        return number
    }
});

console.log(numbers);