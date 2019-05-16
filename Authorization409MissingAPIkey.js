var request = require("request");

var options = {
  method: 'GET',
  url: 'http://gateway.marvel.com/v1/public/series',
  qs: { ts: '1', hash: '92ac8c5b6871737d2e8ebb8a7f93b008' },
  headers:
  {
    'Postman-Token': '81935829-2119-49d6-a888-0ba8df25fce4',
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
