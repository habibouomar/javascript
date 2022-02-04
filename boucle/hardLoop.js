// 01 - Sum

let numbers = []

let min = 1
let max = 100

let somme = 0

for (let i = 0; i <= 50; i++) {
    
    let random = Math.floor(Math.random() * (max - min + 1) + min)

    numbers.push(random);

}
console.log(numbers);

for( let c = 0 ; c < numbers.length ; c++){
    
    somme = somme + numbers[c];

    console.log(numbers[c]);

}
 console.log(somme);

 // 02 - Max

let numbers = []

let min = 1
let max = 200

let top = 0

for (let i = 0; i <= 50; i++) {
    
    let random = Math.floor(Math.random() * (max - min + 1) + min)

    numbers.push(random);

}
console.log(numbers);

for( let c = 0 ; c < numbers.length ; c++){

    if(numbers[0] > top){

        top = numbers[c];
    
    }
    else if(top < numbers[c] ){

        top = numbers[c];  
    } 
    }
    console.log(top)

// 03 - Unique

let numbers = []

let min = 50
let max = 200

let alpha = 0


for (let i = 0; i <= 5; i++) {
    
    let random = Math.floor(Math.random() * (max - min + 1) + min)

    numbers.push(random);

}
console.log(numbers);

var intervalNumber = 0;

while (!(intervalNumber >= 75 && intervalNumber <= 100)) {
    
    intervalNumber = numbers.shift();

}

console.log("final result", intervalNumber)

