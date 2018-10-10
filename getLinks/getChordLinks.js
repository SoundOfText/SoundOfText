// this gets chord links from each artist

const ugs = require('ultimate-guitar-scraper')
const puppeteer = require('puppeteer');
var fs = require('fs');

var command_args = process.argv.slice(2);
console.log(command_args[0]);
filename = command_args[0]


var fs = require('fs')

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});