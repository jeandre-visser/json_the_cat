const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv[2];


  request(url + breedName, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log('Doh! Something is wrong with the URL.\n', error)
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0]);
  })

