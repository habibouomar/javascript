// 05 - Filter Even

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let even = numbers.filter(function(pair){

    if(pair % 2 == 0){

        return pair
    }
})

console.log(even);