const ugs = require('ultimate-guitar-scraper');
const puppeteer = require('puppeteer');
var fs = require('fs');

var command_args = process.argv.slice(2);
console.log(command_args[0]);
filename = command_args[0];

var urls;

var urls = fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  urls = data.split('\n');
  return urls;
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch(headless = false);
    const page = await browser.newPage();
    var explored = {}
    var response;
    let fileStream = fs.createWriteStream(filename + '.txt', {flags: 'a'});
    for (var i = 0; i < urls.length; i++ ){
        var pageindex = 1;
        pagesToExplore = true;
        while(pagesToExplore){
            if (urls[i].length == 0) {
                break;
            }
            url = urls[i] + "?filter=chords&page=" + pageindex
            try{     
                response = await page.goto(url);
                await page.setViewport({width : 2000 , height : 3000});
                list = await page.evaluateHandle(() => {
                    return Array.from(document.getElementsByClassName('link-primary _1kcZ5')).map(a => a.href);
                });
                testlist= await list.jsonValue();
                if (testlist.length == 0) {
                    pagesToExplore = false;
                    break;
                }
                else {
                    if (!(testlist[0] in explored)) {
                        explored[testlist[0]] = 1;
                    }
                    else {
                        pagesToExplore=false;
                        break;
                    }
                }
                for (i in testlist) {
                    console.log(testlist[i]);
                }
            }
            catch(e){
                if (response._status === 403) {
                    continue;
                }
                else {
                    console.log(e);
                    console.log("something didn't work at", url);
                    fileStream.write(url + '\n');
                    break;
                }
            }
            if (response._status === 200) {
                pageindex++;
                await sleep(1000);
            }
        }

    }
    browser.close();
  
  })();


