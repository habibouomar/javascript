/*
* À l'aide de la méthode filter, récupérer les notes supérieures à 10
*/
let nombres = [12, 6, 3, 4, 9, 15, 20];

// Write your code here

let big = nombres.filter(function(num) {
    return num >= 10;
  });

  console.log(big); 
  