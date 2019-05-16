var request = require("request");

var options = {
  method: 'GET',
  url: 'http://gateway.marvel.com/v1/public/series',
  qs:
  {
    ts: '1',
    apikey: '5199a029d3052d89279c398242f7f71c',
    hash: '92ac8c5b6871737d2e8ebb8a7f93b008'
  },
  headers:
  {
    'Postman-Token': '95265693-4b02-479f-9115-b8343cad2cae',
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

  //console.log(body);
});
