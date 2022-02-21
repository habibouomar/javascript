/*
* À l'aide de la méthode filter, récupérer les prenoms qui commencent par 'Ma'
*/
let prenoms = ["Marie", "Antoine", "Sarah", "Mandax"];

 
// Write your code here

let str = prenoms.filter(function(nom) {

        if (nom[0] === "M" && nom[1] === "a") {
            console.log(nom);      
        }
});

  