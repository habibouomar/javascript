// 01-NUMBER

let integer = 102
let float = 13.9

console.log(integer, float);

// 02-CONVERT

let basic = 34
let stringfied = basic.toString();

console.log(stringfied);

// 03-ROUND

let num = 1.5
let rounded = Math.round(num);

console.log(rounded);

// 04 - Arithmétique

let test = 12
let bis = 5

console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test % bis);

// 05 - Comparaison

let test2 = 143
let bis2 = 219

console.log(test2 > bis2);
console.log(test2 < bis2);
console.log(test2 >= bis2);
console.log(test2 <= bis2);
console.log(test2 == bis2);
console.log(test2 === bis2);
console.log(test2 !== bis2);

// 06 - Condition

let limit = 50
let score = 64

if(score >= limit){
    console.log("Ok good !");
} else{
    console.log("Oh nooo...");
}

// 07 - Condition II

let password = "azerty"

if(password.length > 5){
    console.log("The password is secure");
}

// 08 - Condition III

if(score >= limit && password.length > 5){
    console.log("Everything is good");
} else if( score >= limit || password.length > 5){
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// Bonus

let min = 1
let max = 6

let random = Math.floor(Math.random() * (max - min + 1) + min)

if (random === 6){
    console.log("Yes I win !");
}else{
    console.log("So close...");
}

// bonus II

let month = "July"

switch (month) {
	case "January": 
		console.log("winter!");
		break;
	case "Febuary": 
		console.log("winter!");
		break;
	case "March": 
		console.log("spring !");
		break;
	case "April": 
		console.log("spring !");
		break;
    case "May": 
		console.log("spring !");
		break;
    case "June": 
		console.log("summer !");
		break;
    case "July": 
		console.log("summer !");
		break;
    case "August": 
		console.log("summer !");
		break;
    case "September": 
		console.log("fall !");
		break;
    case "October": 
		console.log("fall !");
		break;
    case "November": 
		console.log("fall !");
		break;
    case "December": 
		console.log(" winter !");
		break;
	default: 
		console.log("That's not a month...");
}

// Bonus III

let roundedNumber = 3.6
let floorNumber = Math.floor(roundedNumber)
let ceilNumber = Math.ceil(roundedNumber)

if( (roundedNumber - floorNumber) > (ceilNumber - roundedNumber)){
    roundedNumber = roundedNumber + (ceilNumber -roundedNumber);
    roundedNumber = roundedNumber.toString();
    console.log(roundedNumber);
} else{
    roundedNumber = roundedNumber - (roundedNumber - floorNumber);
    roundedNumber = roundedNumber.toString();
    console.log(roundedNumber);
}