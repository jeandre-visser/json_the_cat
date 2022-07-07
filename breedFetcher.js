const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = process.argv[2];

const breedFetcher = (breedName , cb) => {
  request(url + breedName, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log('Doh! Something is wrong with the URL.\n', error)
      return cb(error, null);
    }

    const data = JSON.parse(body);
    let desc = data[0].description
    console.log(typeof body)
  })
}
