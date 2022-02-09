let request = require("request");

const apiBases = 'https://api.chucknorris.io/jokes/random'

request.get(apiBases, function (err, res, body) {
    // console.log(err);
    // console.log(res.statusCode);
    // console.log(body);

    let info = JSON.parse(body);
    // console.log(info);

    let joke = info.value;
    console.log(joke);
  
  });