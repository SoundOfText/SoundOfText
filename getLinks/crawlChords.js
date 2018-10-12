//this script gets the links to the 1000 most popular songs
const puppeteer = require('puppeteer');
const fs = require('fs')

async function getLinks() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  var total_links = 0;
  var list;
  var chordsPage = 'https://www.ultimate-guitar.com/explore?page=1&type[]=Chords'
  var pageNumber = 1;
  var fileStream = fs.createWriteStream('chord_links.txt', {flags: 'a'});

  await page.goto(chordsPage);
  await page.setViewport({width: 1000, height: 500})

  while(true){
    //there are only 20 pages so we'll break the loop after that
    if (pageNumber == '21') {
      console.log('All done!');
      break;
    }
    try{
      //hi matt, this #Rectangle here is the css selector for the X button on the add
      if(await page.$("#Rectangle") != null){
        page.click("#Rectangle");
        //stop node from dumping a huge error to the console
        process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
      });
      }
      await page.setViewport({width: 2000, height: 1000})
      list = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('link-primary _1kcZ5')).map(a => a.href);
      });
      list2 = await list.jsonValue();
      for (i in list2) {
        fileStream.write(list2[i] + '\n');
        console.log('Wrote ' + list2[i] + ' to file.')
      }
    } catch(err) {
      console.log("something didn't work at", chordsPage);
    }
    pageNumber++;
    pageNumber.toString();
    chordsPage = chordsPage.replace(/page=.*&type/, 'page='+pageNumber.toString()+'&type');
    await page.goto(chordsPage);
  }
  browser.close();
  fileStream.end();
}
getLinks();
