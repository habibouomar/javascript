
// 01 - Array

let fruits = ["mango", "lemon", "blueberry"]

console.log(fruits);
console.table(fruits);


// 02 - Access

let ingredients = ["eggs", "milk", "butter"]

console.log(ingredients[1]);

console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove

let objects = ["pen", "book", "lamp"]

console.log(objects.unshift("chair"));
console.log(objects.pop());
console.log(objects.push("laptop"));
console.log(objects.shift());
console.table(objects);

// 04 - Order

let numbers = [4, 10, 8, 12, 6]
console.log(numbers.reverse());

numbers.sort(function(a, b) {
    return a - b;
  });
console.log(numbers);

// 05 - Boucle


let limit = 10
let total = 0

for (var i = 0 ; i <= limit ; total += i++);

console.log(total)

// 06 - Reverse

let sentence = "Hello Konexio !"
let letters = sentence.split("")
let myArray = []

for (var i = sentence.length; i > -1 ; i--) {

  myArray.push(letters[i]);
}

console.log(myArray.join(""));


// 6 bis reverse 

let sentences = "Hello Konexio !"
let result = ""

for( let index = sentences.length - 1; index >= 0 ; index--){

  result+=sentences[index];
}
console.log(result);



