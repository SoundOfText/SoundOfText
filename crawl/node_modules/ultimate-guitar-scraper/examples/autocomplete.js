const ugs = require('../lib/index')

let query = 'Ozzy'
ugs.autocomplete(query, (error, suggestions) => {
  if (error) {
    console.log(error)
  } else {
    console.log(suggestions)
  }
})
