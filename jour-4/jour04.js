// 01 - Object

var cat = {
	name: "Garfield",
	age: 3,
	isCute: true,
}

console.log(cat);
console.log(cat.age);

if(cat.isCute === true){
    console.log("So Cute !");
}

// 02 - Combine

var cat2 = {
	name: "Gros Minet",
	age: 5,
	isCute: false,
}

var cats = [cat, cat2];
console.log(cats);

console.log(cat.age);
console.log(cat["age"]);
console.log(cats[0].age);

console.log(cat2.isCute);
console.log(cat2["isCute"]);
console.log(cats[1].isCute);


// 03 - Even

function checkIfEven(num) {

    if(num % 2 == 0){
        console.log( num + " is pair");
    } 
    else{
        console.log(num + " is odd")
    }

}

checkIfEven(100);
checkIfEven(79);
checkIfEven(25);
checkIfEven(60);

// 04 - Compare

function compare(num1, num2){

    if(num1 > num2){
        console.log(num1 + " is bigger")
    }
    else if(num1 < num2){
        console.log(num2 + " is bigger")
    }
    else{
        console.log("both are the same")
    }
}

compare(99, 104);
compare(50, 50);

// 05 - Add Up

let total = 0;

function addUp(num){
    
    for (var i = num ; i <= 78 ; i++)
    
    total = i;
    console.log(total);
}

addUp(12);

// 06 - Time


function format(num){
       
    hours = Math.floor(num / 3600);
    num %= 3600;
    minutes = Math.floor(num / 60);
    seconds = num % 60;

    console.log("hours: " + hours + " minutes: " + minutes + " seconds: " + seconds);
    
}

format(3700);

