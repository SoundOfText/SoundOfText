const ugs = require('ultimate-guitar-scraper');
const puppeteer = require('puppeteer');
var fs = require('fs');

var command_args = process.argv.slice(2);
console.log(command_args[0]);
filename = command_args[0];


var fs = require('fs');
var urls;

var urls = fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  urls = data.split('\n');
  return urls;
});

(async () => {
    const browser = await puppeteer.launch(headless = false);
    const page = await browser.newPage();
    var explored = {}
    for (var i = 0; i < urls.length; i++ ){
        var pageindex = 1;
        pagesToExplore = true;
        while(pagesToExplore){
            url = urls[i] + "?filter=chords&page=" + pageindex
            explored[url] = 1;
            if (url in explored) {
                break;
            }
            try{     
                await page.goto(url);
                await page.setViewport({width : 2000 , height : 3000});
                list = await page.evaluateHandle(() => {
                    return Array.from(document.getElementsByClassName('link-primary _1kcZ5')).map(a => a.href);
                });
                testlist= await list.jsonValue();
                if (testlist.length == 0) {
                    pagesToExplore = false;
                    break;
                }
                console.log(testlist);
            }
            catch(e){
                console.log("something didn't work at", url);
                break;
            }
            pageindex++;
        }

    }
    browser.close();
  
  })();


