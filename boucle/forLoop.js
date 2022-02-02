// 01 - Somme des carrés

let start = 5
let limit = 10
let result = 0

for(var i = start; i <= limit; i++){
 result = result + i**2;
}
console.log(result);

// 02 - Comptons

let total = 0

for ( let i = 100; i <= 1000; i++){

 if(i % 7 === 0){

    total = total + 1
    //total++
 }

}
console.log(total);

//03 - Chanceux

let min = 1
let max = 6
let somme = 0

for( var i = 0 ; i <= 20; i++){

let random = Math.floor(Math.random() * (max - min + 1) + min)
    
    if (random >= 5){

        console.log(random);

        somme += random
       
    }
}

console.log(somme)

// 04 - Des boites
// 10  box1 .. 34 box1 .. 17 box2 .. 30 box2 .. 14 i

// 05 - Des setiob
//  12 24 33 39 42 0




