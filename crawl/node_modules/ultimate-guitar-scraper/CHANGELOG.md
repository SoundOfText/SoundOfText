#### 1.0.1 (2018-02-12)

- Fix scraper and
- Ultimate Guitar change their tab type:
  - `'Video Tab'` -> `'Video'`
  - `'Bass Tab'` -> `'Bass'`
  - `'Guitar Pro Tab'` -> `'Guitar Pro'`
  - `'Power Tab'` -> `'Power'`
  - `'Drum Tab'` -> `'Drums'`
  - `'Ukulele Chords'` -> `'Ukulele'`


#### 1.0.0 (2018-02-07)

- remove `advanceSearch`
- rename TAB types:
  - `'video lessons'` -> `'Video Tab'`
  - `'tabs'` -> `'Tab'`
  - `'chords'` -> `'Chords'`
  - `'bass tabs'` -> `'Bass Tab'`
  - `'guitar pro tabs'` -> `'Guitar Pro Tab'`
  - `'power tabs'` -> `'Power Tab'`
  - `'drum tabs'` -> `'Drum Tab'`
  - `'ukulele chords'` -> `'Ukulele Chords'`
- `tab` content for types `'Tabs'`, `'Chords'`, `'Ukulele Chords'`, `'Drum Tab'`, `'Bass Tab'` changed from `{ text: string, html: string }` to `{ text: string }`.
- JSON schema `tab.json`:
  - add required properties `rating`, `numberRates`, `content`
- JSON schema `tabs.json`:
  - remove property `difficulty`
  - required properties `rating`, `numberRates`

#### 0.5.0 (2017-12-18)

- rename `search` for `advanceSearch`
- create `search` that takes
  - query `String`
  - page `Number`
  - type `Array` of TAB type


#### 0.4.0 (2017-10-23)

**Requires nodejs `>= 6.5`**

##### `search`

- `tabs` properties with `null`  are now  _undefined_

##### `get`

- `tab` properties with `null`  are now  _undefined_
- `tab` has property `url` String
- `tab` content is not an Object

| Property `type`    | Property `content`                  |
|--------------------|-------------------------------------|
| `tabs`             | `{ text: String, html: String}`     |
| `chords`           | `{ text: String, html: String}`     |
| `ukulele chords`   | `{ text: String, html: String}`     |
| `drum tabs`        | `{ text: String, html: String}`     |
| `bass tabs`        | `{ text: String, html: String}`     |
| `guitar pro tabs`  | `{ url: String }`                   |
| `power tabs`       | `{ url: String }`                   |
| `video lessons`    | `{ url: String }`                   |

##### `autocomplete`

- param is now a String of what you search instead of an Object.

##### test

Using JSON schema.


#### 0.3.0 (2015-11-30)
- add new feature `autocomplete`
- refactor `utils.js`
- add examples for `autocomplete`
- add/update specs

#### 0.2.0 (2015-11-24)
- extract code in `searchURL` that was formatting the query params in new method `formatQuery`
- better code in `parseTAB` so it parses more *TAB*
- rename `searchURL` for `generateURL`
- better doc
