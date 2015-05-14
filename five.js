(function () {

  var five = function() { return 5; };

  five.upHigh = function() { return '⁵'; };
  five.downLow = function() { return '₅'; };
  five.roman = function(type) { 
    switch(type) {
      case 'upper': return 'V';
      case 'lower': return 'v';
      default: return 'V';
    }
  };
  five.num = function(type) {
    switch(type) {
      case 'format0': return '⑤';
      case 'format1': return '㈤';
      case 'format2': return '⒌';
      default: return '5';
    }
  }
  five.convertTo = function(anotherNumber) {
    // If you need other numbers I'd strongly suggest you call
    // this function when your app starts up and cache the result.
    var oneFifthOfFive = five() / five();

    while(anotherNumber < oneFifthOfFive) {
      anotherNumber += oneFifthOfFive;
    }

    return anotherNumber;
  };

  five.arabic = function() { return 'خمسة'; };
  five.azerbaijani = function() { return 'beş'; };
  five.basque = function() { return 'bost'; };
  five.belarusian = function() { return 'пяць'; };
  five.bosnian = function() { return 'pet'; };
  five.bulgarian = function() { return 'пет'; };
  five.catalan = function() { return 'cinc'; };
  five.chinese = function(type) {
    switch(type) {
      case 'pinyin': return 'wǔ';
      case 'financial': return '伍';
      case 'simplified': return '五';
      case 'traditional': return '伍';
      case 'zheng': return '正';
      default: return '五';
    }
  };
  five.choctaw = function() { return 'tahlapi'; };
  five.croatian = function() { return 'pet'; };
  five.czech = function() { return 'pět'; };
  five.dovah = function() { return 'hen'; };
  five.dutch = function() { return 'vijf'; };
  five.elvish = function() { return 'lempe'; };
  five.english = function() { return 'five'; };
  five.estonian = function() { return 'viis'; };
  five.finnish = function() { return 'viisi'; };
  five.french = function() { return 'cinq'; };
  five.german = function() { return 'fünf'; };
  five.greek = function() { return 'πέντε'; };
  five.hebrew = function() { return 'חמש'; };
  five.hindi = function() { return 'पांच'; };
  five.hungarian = function() { return 'öt'; };
  five.indonesian = function() { return 'lima'; };
  five.irish = function() { return 'cúig'; };
  five.italian = function() { return 'cinque'; };
  five.japanese = function() { return '五'; };
  five.kannada = function() { return 'ಐದು'; };
  five.klingon = function() { return 'vagh'; };
  five.korean = function() { return '오'; };
  five.latin = function() { return 'quinque'; };
  five.latvian = function() { return 'pieci'; };
  five.lithuanian = function() { return 'penki'; };
  five.mongolian = function() { return 'таван'; };
  five.norwegian = function() { return 'fem'; };
  five.persian = function() { return 'پنج'; };
  five.piglatin = function() { return 'ivefay'; };
  five.polish = function() { return 'pięć'; };
  five.portuguese = function () { return 'cinco'; };
  five.romanian = function() { return 'cinci'; };
  five.russian = function() { return 'пять'; };
  five.serbian = function() { return 'pet'; };
  five.slovakian = function() { return 'päť'; };
  five.slovenian = function() { return 'pet'; };
  five.spanish = function() { return 'cinco'; };
  five.swedish = function() { return 'fem'; };
  five.tamil = function() { return 'ஐந்து'; };
  five.telugu = function() { return 'ఐదు'; };
  five.turkish = function() { return 'beş'; };
  five.thai = function() { return 'ห้า'; };
  five.ukrainian = function() { return 'п’ять'; };
  five.welsh = function() { return 'pump'; };
  
  five.morseCode = function() { return '....-'; };
  five.binary = function() { return '101'; };
  five.octal = function() { return '5'; };
  five.hex = function() { return '5'; };

  five.negative = function() { return -5; };
  five.loud = function (lang) { return (lang && typeof five[lang] === 'function') ? five[lang]().toUpperCase() : five.english().toUpperCase();};
  five.smooth = function() { return 'S'; };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

    return five();
  };

  five.map = function(array) { return array.map(five); };
  five.reduce = function(array) { return array.reduce(five); };

  five.fab = function() {
    return ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber'];
  };
  
  five.jackson = function() {
    return ['Jackie','Tito','Jermaine','Marlon','Michael'];
  };

  five.async = function(callback) {
    process.nextTick(function() {
      callback(null, five());
    });
  };

  five.rot = function(word) {
    if(typeof(word) != 'string') {
      return word;
    }
    function replaceLetter(z) {
      if('0' <= z && z <= '9') {
        return ((parseInt(z)+5)%10).toString();
      }
      var aLetter = (z <= 'Z' ? 'A': 'a').charCodeAt(0);
      var x = 5 + z.charCodeAt(0) - aLetter;
      x %= 26;
      return String.fromCharCode(x+aLetter);
    }
    return word.replace(/[a-zA-Z0-9]/g, replaceLetter);
  };

  five.valueOf = five;

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (window) {
    window.five = five;
  }
}());
