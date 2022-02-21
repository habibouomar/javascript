/** 
  * Faire une fonction qui affiche la table de multiplication d'un nombre passé en paramètre
*/
// Write your code here


let result = 0

function table(number) {

  for (let i = 0; i < 11; i++) {
    result = number * i
    console.log(result);
  }
}
table(5);