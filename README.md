# SoundOfText

See requirements: https://www.npmjs.com/package/ultimate-guitar-scraper

In directory of package.json for crawl
npm i ultimate-guitar-scraper --save

In getLinks/ run
npm i puppeteer --save

getChordLinks.js:
Returns links to chords (unclean)
Input, take a clean file of artist links
how to run: 
node getChordLinks.js <file path for clean links> > <file path for chord links>
example: node getChordLinks.js cleanLinks/n-links.out > songLinks/n-artists/choLinks.txt

cleanLinks.py:
Outputs links without surrounding quotes or braces. Also will remove duplicates.
do not output in same file as input, this will erase the input file (I know, sorry)

how to run:
python cleanlinks.py <file path to unclean links> > <new filename for clean links>

example: python cleanLinks.py artistLinks/n-links.out > cleanLinks/n-links.out
