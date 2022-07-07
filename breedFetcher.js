const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv[2];


  request(url + breedName, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log('Doh! Something is wrong with the URL.\n', error)
      return;
    }
    const data = JSON.parse(body);

    if (data[0] && data[0].description) {
      console.log(data[0].description)
    } else {
      console.log('Doh! The requested breed was not found!')
    }
  })

