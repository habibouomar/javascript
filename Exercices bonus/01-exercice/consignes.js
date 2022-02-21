/**
 * Convertir des pouces en centimetres
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * L'utilisateur saisit un nombre de pouces à convertir
 * 1" (1 pouce) = 2,54 centimètres  
 * 
 * https://www.pouce-cm.fr/
 */

// Write your code here

// console.log(process.argv);
let size = process.argv.slice(2);
size *= 2.54
console.log('taille en centimetre : ', size);
