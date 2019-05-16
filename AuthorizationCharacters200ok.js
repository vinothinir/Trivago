var request = require("request");

var options = {
  method: 'GET',
  url: 'http://gateway.marvel.com/v1/public/characters/1011010',
  qs:
  {
    ts: '1',
    apikey: '5199a029d3052d89279c398242f7f71c',
    hash: '92ac8c5b6871737d2e8ebb8a7f93b008'
  },
  headers:
  {
    'Postman-Token': '9472deb7-54e1-4221-a852-5b9a71143ec6',
    'cache-control': 'no-cache'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(response.statusCode);
  console.log(response.statusMessage);
  if (response.statusCode == "200") {
    console.log("Test Success");
  }
  else {
    console.log("Test Fail");
  }

  console.log(body);
});
