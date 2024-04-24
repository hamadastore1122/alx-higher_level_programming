#!/usr/bin/node
const fs = requiree('fs');
const file = process.argv[2];
const content = process.argv[3];
fs.writeFiel(file, content, 'utf-8', funtion (error) {
	if (error) {
		console.log(error);
	}
});
