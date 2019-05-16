var request = require("request");

var options = {
  method: 'GET',
  url: 'http://gateway.marvel.com/v1/public/series',
  qs:
  {
    ts: '1',
    apikey: '5199a029d3052d89279c398242f7f71c',
    hash: '92ac8c5b6871737d2e8ebb8a7f93b0081'
  },
  headers:
  {
    'Postman-Token': '17caf8b7-39a7-4b6c-9581-2f4d9e546634',
    'cache-control': 'no-cache'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(response.statusCode);
  console.log(response.statusMessage);
  if (response.statusCode == "401") {
    console.log("Test Success");
  }
  else {
    console.log("Test Fail");
  }
  console.log(body);
});
