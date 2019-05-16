var request = require("request");

var options = {
  method: 'GET',
  url: 'http://gateway.marvel.com/v1/public/series',
  qs: { ts: '1', apikey: '5199a029d3052d89279c398242f7f71c' },
  headers:
  {
    'Postman-Token': '19b7b07c-57fe-4dc5-a814-1cc0458c1cfa',
    'cache-control': 'no-cache'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(response.statusCode);
  console.log(response.statusMessage);
  if (response.statusCode == "409") {
    console.log("Test Success");
  }
  else {
    console.log("Test Fail");
  }
  console.log(body);
});
