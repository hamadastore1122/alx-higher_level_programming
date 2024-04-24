#!/usr/bin/node
const request = require('request');
// Import the  'request' module.
request.get(process.argv[2])
// Use the 'request' module to perform an HTTP GET reuest to rhe URL.
.on('response', function (response) {
// Set up event Listener for the 'respose' event emitted by the HTTP request.
console.log('code: ${response.statusCodde}');
// Log the HTTP status code of the response to the conole.
});
