//import API
const ugs = require('ultimate-guitar-scraper');
const fs = require('fs');

//read in link file to array
fs.readFile('chord_links.txt', function(err, data) {
    if(err) throw err;
    var urlList = data.toString().split('\n');

    //for each link in the array, call the API and write the response to file
    for (i in urlList) {
      let tabUrl = urlList[i];
      ugs.get(tabUrl, (error, tab) => {
        if (error) {
          console.log(error)
        } else {
          //create filestream object
          let fileStream = fs.createWriteStream('data/' + tab['name'] + '.txt', {flags: 'a'});
          //check to see if this song has this data before we write it out
          if (tab['type']) {
            fileStream.write('Type: ' + tab['type'] + '\n');
          }
          if (tab['artist']) {
            fileStream.write('Artist: ' + tab['artist'] + '\n');
          }
          if (tab['name']) {
            fileStream.write('Song Title: ' + tab['name'] + '\n');
          }
          if (tab['url']) {
            fileStream.write('URL: ' + tab['url'] + '\n');
          }
          if (tab['raiting']) {
            fileStream.write('Raiting: ' + tab['raiting'] + '\n');
          }
          if (tab['numberRates']) {
            fileStream.write('Number of Raitings: ' + tab['numberRates'] + '\n');
          }
          if (tab['difficulty']) {
            fileStream.write('Difficulty: ' + tab['difficulty'] + '\n');
          }
          if (tab['content']['text']) {
            fileStream.write('Text: ' + '\n' + tab['content']['text'] + '\n');
          }
          if (tab['content']['url']) {
            fileStream.write('Content URL: ' + '\n' + tab['content']['url'] + '\n');
          }
          console.log('Wrote ' + tab['name'] + ' to file!')
          //close the stream
          fileStream.end()
        }
      })
    }
});
