const ugs = require('ultimate-guitar-scraper')
const puppeteer = require('puppeteer');
const classForLettersList = '_2tauS _1MZTk _3f-wh _3Ro9t _1kcZ5'
var urlArtistList = 'https://www.ultimate-guitar.com/bands/a.htm'


var command_args = process.argv.slice(2);
console.log(command_args);

function NavigateToBandsList(letter) {
    letter.toString();
    urlArtistList = urlArtistList.replace(/bands.*.htm/, 'bands/'+letter.toString()+'.htm');
    return urlArtistList;
}

(async () => {
  const browser = await puppeteer.launch(headless = false);
  const page = await browser.newPage();

  var pageindex = 1;
  url = NavigateToBandsList(command_args[0] + pageindex); //initialurl

  while(true){
    try{
      //console.log("in the try");

      await page.goto(url);
      //console.log("went to url");
      await page.setViewport({width : 2000 , height : 3000});
      list = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('link-secondary _1kcZ5')).map(a => a.href);
      });
      testlist= await list.jsonValue();
      if (testlist.length == 0) {
        console.log("done");
        break;
      }
      console.log(testlist);
      pageindex++;
      url = NavigateToBandsList(command_args[0] + pageindex);
    }
    catch(e){
      console.log("something didn't work at", url);
      
    }
  }
  browser.close();

})();


//for all in class _liQi2
//#mw-content-text
