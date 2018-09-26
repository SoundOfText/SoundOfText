/* eslint-env jasmine */
const Ajv = require('ajv')
const ajv = new Ajv()

const jsonSchemaMatcher = {
  toMatchJsonSchema: (util, customEqualityTesters) => {
    return {
      compare: (actual, expected) => {
        const schema = require(`../support/schemas/${expected}.json`)
        const valid = ajv.validate(schema, actual)

        if (!valid) console.error(ajv.errors)

        const result = {}
        result.pass = valid === true
        if (result.pass) {
          result.message = 'Expected ' + JSON.stringify(actual, null, 2) + `not to match schema ${expected}.json`
        } else {
          result.message = 'Expected ' + JSON.stringify(actual, null, 2) + `to match schema ${expected}.json`
        }
        return result
      }
    }
  }
}

beforeEach(() => {
  jasmine.addMatchers(jsonSchemaMatcher)
})
