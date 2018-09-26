const ugs = require('ultimate-guitar-scraper')
const puppeteer = require('puppeteer');
const NEXT_PAGE = "body > div.js-page.js-global-wrapper > div > div._16KsA > main > div._2WjWY > div._1iiNj > section > div._3Aoru > div > a._1NFVI._1G04O._2oeZQ._1kcZ5";
const Lyrics = "body > div.js-page.js-global-wrapper > div > div._16KsA > main > div._2WjWY > div._1iiNj > section > article > div > div:nth-child(2) > div._1RJlF._3ku_w > header > span > span > a"


async function getLinks() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  var total_links = 0;
  var list;
  
  await page.goto('https://www.ultimate-guitar.com/explore?order=artistname_asc&type[]=Chords');
  await page.screenshot({ path: 'screenshots/ultimateguitar.png' });

  while(await page.$(NEXT_PAGE) != null){
    list = await page.evaluateHandle(() => {
      return Array.from(document.getElementsByClassName('link-primary _1kcZ5')).map(a => a.href);
    });
    console.log(await list.jsonValue());
    await page.click(NEXT_PAGE);
    await page.waitForNavigation();
    await page.screenshot({ path: 'screenshots/ultimateguitar.png' });

  }
  browser.close();

}

 
// let tabUrl = 'https://tabs.ultimate-guitar.com/tab/frank_sinatra/fly_me_to_the_moon_chords_335196'
// ugs.get(tabUrl, (error, tab) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(tab)
//   }
// })

getLinks();


//for all in class _liQi2
//#mw-content-text
