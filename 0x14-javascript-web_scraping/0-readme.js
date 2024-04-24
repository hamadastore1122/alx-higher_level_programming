#!/usr/bin/node
const fs = require('fs');
// import the built-in Node.js 'fs' module.
fs.readFile(process.argv[2], 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
