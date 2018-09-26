//todo: iterate over list of links


let tabUrl = 'https://tabs.ultimate-guitar.com/tab/frank_sinatra/fly_me_to_the_moon_chords_335196'
ugs.get(tabUrl, (error, tab) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tab)
  }
})