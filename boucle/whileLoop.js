// 01 - Comptons

let num = 50;

while ( num < 200) {
  num++;

  if(num % 2 == 0){
    console.log( num + " est un chiffre pair");
    } 
}

console.log(num);

// 02 - Try again

let dice = null
let count = 0
let min = 1
let max = 6

while ( dice !== 6){

    let random = Math.floor(Math.random() * (max - min + 1) + min);

    if (random <= 5){

        dice = random;
        count = count + 1;
    }
    else if (random = 6){

        return console.log("le dé viens tomber sur 6" + " & le count vaut = " + count); 
    }
    console.log(dice);   
}

// 03 - Course

let usainBolt = 0
let tysonGay = 0

let min = 1
let max = 10

while (usainBolt < 100) {

    let jamaican = Math.floor(Math.random() * (max - min + 1) + min);

    usainBolt = usainBolt + jamaican;
}

while (tysonGay < 100) {

    let american = Math.floor(Math.random() * (max - min + 1) + min);

    tysonGay = tysonGay + american;
}

if(usainBolt > tysonGay){

    console.log("Usain Winner with: " + usainBolt + " & Tyson loose with: " + tysonGay);
}
else {
    console.log("Tyson Winner with: " + tysonGay + " & Usain loose with: " + usainBolt);
}

// 04 - Des boites
// 5.. -8

// 05 - Encore des boites
// 7 .. 0 ... 7
