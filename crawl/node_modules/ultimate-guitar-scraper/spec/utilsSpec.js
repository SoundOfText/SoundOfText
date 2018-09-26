/* eslint-env jasmine */
const utils = require('../lib/utils')

describe('utils', () => {
  describe('formatSearchQuery', () => {
    it('is invalid without param query', () => {
      expect(() => {
        utils.formatSearchQuery({})
      }).toThrowError(Error)
    })

    it('uses default params', () => {
      let query = {
        query: 'Muse'
      }

      expect(utils.formatSearchQuery(query)).toEqual({
        value: 'Muse',
        type: [ 300, 200 ],
        page: 1,
        search_type: 'title',
        order: ''
      })
    })

    it('uses params', () => {
      let query = {
        query: 'Little Black Submarines',
        type: [
          'Video',
          'Tab',
          'Chords',
          'Bass',
          'Guitar Pro',
          'Power',
          'Drums',
          'Ukulele'
        ],
        page: 1
      }

      expect(utils.formatSearchQuery(query)).toEqual({
        value: 'Little Black Submarines',
        type: [
          100,
          200,
          300,
          400,
          500,
          600,
          700,
          800
        ],
        page: 1,
        search_type: 'title',
        order: ''
      })
    })
  })
})
