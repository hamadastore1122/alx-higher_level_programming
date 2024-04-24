#!/usr/bin/node

const req = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const id = process.argv[2];
req.get(url + id, function (error2, res, body) {
  if (error2) {
    console.log(error2);
  } else {
    console.log(JSON.parse(body).title);
  }
});
