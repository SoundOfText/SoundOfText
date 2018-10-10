# SoundOfText

See requirements: https://www.npmjs.com/package/ultimate-guitar-scraper

In directory of package.json for crawl
npm i ultimate-guitar-scraper --save

In getLinks/ run
npm i puppeteer --save

cleanLinks.py:
do not output in same file as input, this will erase the input file (I know, sorry)
how to run:
python cleanlinks.py <file path to clean> > <new filename for clean links>
example: python cleanLinks.py artistLinks/n-links.out > cleanLinks/n-links.out