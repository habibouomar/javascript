let request = require("request");

function checkPokedex(id) {

    request.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (err, res, catchPokemen) {
        // console.log(err);
        // console.log(res.statusCode);
        // console.log(catchPokemen);
    
        let pokeDex = JSON.parse(catchPokemen);

        console.log("id:", id)
        console.log("name:", pokeDex.name);
      });
} 
checkPokedex(40);


// let request = require("request");

// let apiBases = "https://pokeapi.co/api/v2/pokemon/"

// function checkPokedex(id) {

//     request.get(apiBases + id, function (err, res, catchPokemen) {
//         // console.log(err);
//         // console.log(res.statusCode);
//         // console.log(catchPokemen);
    
//         let pokeDex = JSON.parse(catchPokemen);

//         console.log("id:", id)
//         console.log("name:", pokeDex.name);
//       });
// } 
// checkPokedex(40);


