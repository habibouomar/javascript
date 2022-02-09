// 01 - Countries

let request = require("request");

const apiBase = 'https://restcountries.com/v3.1/all'

let   countriesNames = []
    
request.get(apiBase, function (err, res, body) {
    // console.log(err);
    // console.log(res.statusCode);
    // console.log(body);

    let json = JSON.parse(body);
    // console.log(json);

    for (let i = 0; i< json.length; i++) {
     
    let list = json[i].name.common;
    countriesNames.push(list);
  
  }
  console.log("The list is: ",  countriesNames.join(" - "));  
});

