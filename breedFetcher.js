const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, cb) {
  request(url + breedName, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return cb('Doh! Something is wrong with the URL.\n' + error, null);
    }
    const data = JSON.parse(body);

    if (data[0] && data[0].description) {
      cb(null, data[0].description)
    } else {
      cb('Doh! The requested breed was not found!', null)
    }
  })
};

module.exports = { fetchBreedDescription };
