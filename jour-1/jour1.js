console.log("Hello World");

var test = "My name is Omar" 
console.log(test);

var name = "Omar" ;
console.log("Nice to meet you "+ name);

var testLength = "I'm very long !"
console.log(testLength.length);

var food = "croissant is meh"
food = food.replace("meh", "so good");
console.log(food);

var basic = "This is Cool"
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);
console.log({basic, basicUp, basicDown});

var word = "banana"
var letters = word.split("");
console.log(letters);

var age = 32
var template = "I'm " + age + " years old";
console.log(template);
console.log(`I'm ${age} years old`);

//bonus

var y = "je m\'apelle Omar \net je suis developpeur web"
console.log(y);

var x = "Bonjour la france"
console.log(x.substring(1, 3));

var changed = "bonjour"
console.log(changed.replaceAll("o", "a"));
