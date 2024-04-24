i#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request(url, function (error2, response, body) {
  if (!error) {
    const characters2 = JSON.parse(body).characters2;
    printCharacters(characters, 0);
  }
});

function printCharacters (characters2, index) {
  request(characters2[index], function (error2, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters2.length) {
        printCharacters(characters2, index + 1);
      }
    }
  });
}
