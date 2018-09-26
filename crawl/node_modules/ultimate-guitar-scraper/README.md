# ultimate-guitar-scraper

[![npm version](https://badge.fury.io/js/ultimate-guitar-scraper.svg)](https://badge.fury.io/js/ultimate-guitar-scraper)
[![Dependency Status](https://gemnasium.com/masterT/ultimate-guitar-scraper.svg)](https://gemnasium.com/masterT/ultimate-guitar-scraper)
[![TravisCI Status](https://travis-ci.org/masterT/ultimate-guitar-scraper.svg?branch=master)](https://travis-ci.org/masterT/ultimate-guitar-scraper)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A scraper for http://www.ultimate-guitar.com

> Rock and roll! 🎸 🎶 🤘🏻

The scraper allows you to:
- Search TAB by keyword.
- Get TAB from its url.
- Get suggestions for artist or album.

## Requirements

- nodejs `>= 6.5`
- npm


## Installation

Using npm:

```shell
npm i ultimate-guitar-scraper --save
```

## Usage

### `search(query, callback [, requestOptions])`

#### query

Type: `Object`

| Name     | Type            | Require | Default              |
|----------|-----------------|---------|----------------------|
| query    | string          | yes     |                      |
| page     | number          | no      | `1`                  |
| type     | string or array | no      | `['Tab', 'Chords']` |

Available TAB types:
- `'Video'`
- `'Tab'`
- `'Chords'`
- `'Bass'`
- `'Guitar Pro'`
- `'Power'`
- `'Drums'`
- `'Ukulele'`

#### callback

Type: `Function (error, tabs, requestResponse, requestBody)`

- **error**: Error object. `null` if no error.
- **tabs**: an array of TAB (see TAB structure below) `null` if error.
- **requestResponse**: the original response returned by [request](https://www.npmjs.com/package/request).
- **requestBody**: the original body returned by [request](https://www.npmjs.com/package/request).


#### requestOptions

Type: `Object`

Options of the HTTP request, made with package [request](https://www.npmjs.com/package/request).


### Examples

Basic usage.

```js
const ugs = require('ultimate-guitar-scraper')

ugs.search({
  query: 'Wish You Were Here',
  page: 1,
  type: ['Tab', 'Chords', 'Guitar Pro']
}, (error, tabs) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tabs)
  }
})
```

Using [request](https://www.npmjs.com/package/request) options to pass a custom header.

```js
const ugs = require('ultimate-guitar-scraper')

var query = {
  query: 'Cooking Up Something Good'
}

function callback (error, tabs, response, body) {
  if (error) {
    console.log(error)
  } else {
    console.log(tabs)
    console.log('Utlimate Guitar server: ' + response.headers['server'])
  }
}

var options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36'
  }
}

ugs.search(query, callback, options)
```

### Tabs

Matches JSON schemas [tabs.json](spec/support/schemas/tabs.json).

Example:

```js
[
  {
    artist: 'Incubus',
    name: 'Wish You Were Here',
    url: 'https://tabs.ultimate-guitar.com/tab/incubus/wish_you_were_here_tabs_34713',
    rating: 3.8,
    numberRates: 5,
    type: 'Tab'
  },
  /* ... */
]
```

### `get(tabUrl, callback [, requestOptions])`

#### tabUrl

Type: `String`

The url of the TAB.

#### callback

Type: `Function(error, tab, requestResponse, requestBody)`

- **error**: Error object. `null` if no error.
- **tab**: the TAB (see TAB structure below) `null` if error.
- **requestResponse**: the original response returned by [request](https://www.npmjs.com/package/request).
- **requestBody**: the original body returned by [request](https://www.npmjs.com/package/request).

#### requestOptions

Type: `Object`

Options of the HTTP request, made with package [request](https://www.npmjs.com/package/request).

#### Example

Basic usage.

```js
const ugs = require('ultimate-guitar-scraper')

let tabUrl = 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm'
ugs.get(tabUrl, (error, tab) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tab)
  }
})
```

#### Tab

Matches JSON schemas [tab.json](spec/support/schemas/tab.json).

Example:

```js
{
  artist: 'Nirvana',
  name: 'Smells Like Teen Spirit',
  url: 'https://tabs.ultimate-guitar.com/tab/nirvana/smells_like_teen_spirit_chords_1197271',
  rating: 4.32643,
  numberRates: 35,
  type: 'Chords',
  difficulty: 'intermediate',
  content: {
    text: '[Intro]\n\n[ch]Fsus2[/ch]  [ch]Bbsus2[/ch]  [ch]Ab[/ch]  [ch]Db[/ch] (x4)\n\n\n[Verse Intro] ...'
  }
}
```


### `autocomplete(query, callback [, requestOptions])`

#### query

Type: `String`

#### callback

Type: `Function(error, suggestions, requestResponse, requestBody)`

- **error**: Error object. `null` if no error.
- **suggestions**: an array of String that represent `'song'` or `'artist'`.
- **requestResponse**: the original response returned by [request](https://www.npmjs.com/package/request).
- **requestBody**: the original body returned by [request](https://www.npmjs.com/package/request).


#### requestOptions

Type: `Object`

Options of the HTTP request, made with package [request](https://www.npmjs.com/package/request).


### Example

```js
const ugs = require('ultimate-guitar-scraper')

var query = 'Ozzy'
ugs.autocomplete(query, (error, suggestions) => {
  if (error) {
    console.log(error)
  } else {
    console.log(suggestions)
  }
})
```

### Suggestions

Matches JSON schemas [suggestions.json](spec/support/schemas/suggestions.json).

Example:


```js
[
  'ozzy osbourne',
  'ozzy',
  'ozzy osbourne crazy train live',
  'ozzy osbourne dreamer',
  'ozzy osbourne no more tears',
  'ozzy osbourne mama im coming home',
  'ozzy osbourne goodbye to romance',
  'ozzy osbourne shot in the dark',
  'ozzy osbourn',
  'ozzy osbourne perry mason'
]
```

## Test

Feature tests are run _daily_, thank to Travis CI new feature [CRON Jobs](https://docs.travis-ci.com/user/cron-jobs/). This way we know if the scraper is ever broken.

Run the test:

```bash
npm test
```


## Contributing

Contribution is welcome! Open an issue first.


## License

MIT.
