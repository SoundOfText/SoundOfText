const ugs = require('../lib/index')

const tabUrlByType = {
  'Video': 'https://tabs.ultimate-guitar.com/tab/nirvana/smells_like_teen_spirit_video_1418317',
  'Tab': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver3_tab.htm',
  'Chords': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm',
  'Bass': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver3_btab.htm',
  'Guitar Pro': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_guitar_pro.htm',
  'Power': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_power_tab.htm',
  'Drums': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_drum_tab.htm',
  'Ukulele': 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ukulele_crd.htm'
}

Object.keys(tabUrlByType).forEach((type) => {
  const tabType = type
  const tabUrl = tabUrlByType[type]

  ugs.get(tabUrl, (error, tab) => {
    if (error) {
      console.log(error)
    } else {
      console.log(tabType, tabUrl, tab)
    }
  })
})
