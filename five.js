(function() {

  'use strict'
  let five = () => 5

  five.upHigh = () => '⁵'
  five.downLow = () => '₅'
  five.roman = () => 'V'

  five.convertTo = (anotherNumber) => {
    // If you need other numbers I'd strongly suggest you call
    // this function when your app starts up and cache the result.
    let oneFifthOfFive = five() / five()

    while (anotherNumber < oneFifthOfFive)
      anotherNumber += oneFifthOfFive

    return anotherNumber
  }

  five.arabic = () => 'خمسة'
  five.azerbaijani = () => 'beş'
  five.basque = () => 'bost'
  five.belarusian = () => 'пяць'
  five.bosnian = () => 'pet'
  five.bulgarian = () => 'пет'
  five.catalan = () => 'cinc'
  five.chinese = () => '五'
  five.choctaw = () => 'tahlapi'
  five.croatian = () => 'pet'
  five.czech = () => 'pět'
  five.dothraki = () => 'mek'
  five.dovah = () => 'hen'
  five.dutch = () => 'vijf'
  five.elvish = () => 'lempe'
  five.english = () => 'five'
  five.estonian = () => 'viis'
  five.finnish = () => 'viisi'
  five.french = () => 'cinq'
  five.german = () => 'fünf'
  five.greek = () => 'πέντε'
  five.hebrew = () => 'חמש'
  five.hindi = () => 'पांच'
  five.hungarian = () => 'öt'
  five.icelandic = () => 'fimm'
  five.indonesian = () => 'lima'
  five.irish = () => 'cúig'
  five.italian = () => 'cinque'
  five.japanese = () => '五'
  five.kannada = () => 'ಐದು'
  five.klingon = () => 'vagh'
  five.korean = () => '오'
  five.latin = () => 'quinque'
  five.latvian = () => 'pieci'
  five.lithuanian = () => 'penki'
  five.mongolian = () => 'таван'
  five.norwegian = () => 'fem'
  five.persian = () => 'پنج'
  five.piglatin = () => 'ivefay'
  five.polish = () => 'pięć'
  five.portuguese = () => 'cinco'
  five.romanian = () => 'cinci'
  five.russian = () => 'пять'
  five.serbian = () => 'pet'
  five.slovakian = () => 'päť'
  five.slovenian = () => 'pet'
  five.spanish = () => 'cinco'
  five.swedish = () => 'fem'
  five.tamil = () => 'ஐந்து'
  five.telugu = () => 'ఐదు'
  five.turkish = () => 'beş'
  five.thai = () => 'ห้า'
  five.ukrainian = () => 'п’ять'
  five.welsh = () => 'pump'

  five.morseCode = () => '.....'
  five.base = i => five().toString(i)
  five.binary = () => five.base(2)
  five.octal = () => five.base(8)
  five.hex = () => five.base(16)
  five.mdFive = () => '30056e1cab7a61d256fc8edd970d14f5'

  five.negative = () => -5
  five.loud = lang => (lang && typeof five[lang] === 'function') ? five[lang]().toUpperCase() : five.english().toUpperCase()
  five.smooth = () => 'S'

  five.tooSlow = () => {
    let returnIn = new Date(new Date().valueOf() + 555)

    do { } while (new Date() < returnIn)

    return five()
  }

  five.isFive = a => a === five()

  five.map = array => array.map(five)
  five.filter = array => array.filter(five.isFive)
  five.reduce = array => array.reduce(five)

  five.fab = () => ['Juwan Howard', 'Ray Jackson', 'Jimmy King', 'Jalen Rose', 'Chris Webber']
  
  five.jackson = () => ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael']

  /**
   * References "I got 5 on it" by Luniz.
   * http://en.wikipedia.org/wiki/I_Got_5_on_It
   */
  five.luniz = () => "I Got " + five() + " on It"

  five.async = function(callback) {
    process.nextTick(() => {
      callback(null, five())
    })
  }

  five.rot = word => {
    if (typeof (word) != 'string')
      return word

    let replaceLetter = z => {
      if ('0' <= z && z <= '9')
        return ((parseInt(z) + 5) % 10).toString()

      let aLetter = (z <= 'Z' ? 'A' : 'a').charCodeAt(0)
      let x = 5 + z.charCodeAt(0) - aLetter
      x %= 26
      return String.fromCharCode(x + aLetter)
    }
    return word.replace(/[a-zA-Z0-9]/g, replaceLetter)
  }

  five.oclock = () => '🕔'

  five.valueOf = five

  if (typeof module !== 'undefined' && module.exports)
    module.exports = five
  else if (typeof define === 'function' && define.amd)
    define(five)
  else if (window)
    window.five = five

} ())
