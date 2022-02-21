/*
* À l'aide de la méthode map, créer un nouveau tableau qui contiendra les prenoms dans des balises <li> sous forme de chaines de caractères
* exemples: ['Mohamed', 'Erika'] devient ['<li>Mohamed</li>', '<li>Erika</li>']
*
*/
let prenoms = ['Mohamed', 'Erika', 'Madi', 'Astou'];

// Write your code here

let link = prenoms.map(function(add) {
    return "<li>" + add + "</li>";
  });
  console.log(link); 