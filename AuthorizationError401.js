var request = require("request");

var options = { method: 'GET',
  url: 'http://gateway.marvel.com/v1/public/series',
  qs: 
   { ts: '1',
     apikey: '5199a029d3052d89279c398242f7f71c',
     hash: '92ac8c5b6871737d2e8ebb8a7f93b00' },
  headers: 
   { 'Postman-Token': 'ef896b76-2175-467a-9ad0-8dd80fdf8678',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
