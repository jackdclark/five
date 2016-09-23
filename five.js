(function () {

  var five = function() { return 5; };

  // Quote: Malaclypse the Younger, Principia Discordia, Page 00016
  five.law = function() { return 'The Law of Fives states simply that: All things happen in fives, or are divisible by or are multiples of five, or are somehow directly or indirectly appropriate to 5. The Law of Fives is never wrong.'; };

  five.upHigh = function() { return '\u2075'; }; // ⁵
  five.downLow = function() { return '\u2085'; }; // ₅
  five.roman = function() { return 'V'; };

  five.convertTo = function(anotherNumber) {
    // If you need other numbers I'd strongly suggest you call
    // this function when your app starts up and cache the result.
    var oneFifthOfFive = five() / five();

    while(anotherNumber < oneFifthOfFive) {
      anotherNumber += oneFifthOfFive;
    }

    return anotherNumber;
  };

  five.arabic = function() { return '\u062e\u0645\u0633\u0629'; }; // خمسة
  five.azerbaijani = function() { return 'be\u015f'; }; // beş
  five.basque = function() { return 'bost'; };
  five.belarusian = function() { return '\u043f\u044f\u0446\u044c'; }; // пяць
  five.bosnian = function() { return 'pet'; };
  five.bulgarian = function() { return '\u043f\u0435\u0442'; }; // пет
  five.catalan = function() { return 'cinc'; };
  five.chinese = function() { return '\u4e94'; }; // 五
  five.choctaw = function() { return 'tahlapi'; };
  five.croatian = function() { return 'pet'; };
  five.czech = function() { return 'p\u011bt'; }; // pět
  five.dothraki = function() { return 'mek'; };
  five.dovah = function() { return 'hen'; };
  five.dutch = function() { return 'vijf'; };
  five.elvish = function() { return 'lempe'; };
  five.english = function() { return 'five'; };
  five.estonian = function() { return 'viis'; };
  five.finnish = function() { return 'viisi'; };
  five.french = function() { return 'cinq'; };
  five.german = function() { return 'f\u00fcnf'; }; // fünf
  five.greek = function() { return '\u03c0\u03ad\u03bd\u03c4\u03b5'; }; // πέντε
  five.hebrew = function() { return '\u05d7\u05de\u05e9'; }; // חמש
  five.hindi = function() { return '\u092a\u093e\u0902\u091a'; }; // पांच
  five.hungarian = function() { return '\u00f6t'; }; // öt
  five.icelandic = function() { return 'fimm'; };
  five.indonesian = function() { return 'lima'; };
  five.irish = function() { return 'c\u00faig'; }; // cúig
  five.italian = function() { return 'cinque'; };
  five.japanese = function() { return '\u4e94'; }; // 五
  five.kannada = function() { return '\u0c90\u0ca6\u0cc1'; }; // ಐದು
  five.klingon = function() { return 'vagh'; };
  five.korean = function() { return '\uc624'; }; // 오
  five.latin = function() { return 'quinque'; };
  five.latvian = function() { return 'pieci'; };
  five.lithuanian = function() { return 'penki'; };
  five.mongolian = function() { return '\u0442\u0430\u0432\u0430\u043d'; }; // таван
  five.nepali = function() { return '\u092a\u093e\u0901\u091a'; }; // पाँच
  five.norwegian = function() { return 'fem'; };
  five.persian = function() { return '\u067e\u0646\u062c'; }; // پنج
  five.piglatin = function() { return 'ivefay'; };
  five.polish = function() { return 'pi\u0119\u0107'; }; // pięć
  five.portuguese = function () { return 'cinco'; };
  five.romanian = function() { return 'cinci'; };
  five.russian = function() { return '\u043f\u044f\u0442\u044c'; }; // пять
  five.serbian = function() { return 'pet'; };
  five.slovakian = function() { return 'p\u00e4\u0165'; }; // päť
  five.slovenian = function() { return 'pet'; };
  five.spanish = function() { return 'cinco'; };
  five.swedish = function() { return 'fem'; };
  five.tamil = function() { return '\u0b90\u0ba8\u0bcd\u0ba4\u0bc1'; }; // ஐந்து
  five.telugu = function() { return '\u0c10\u0c26\u0c41'; }; // ఐదు
  five.turkish = function() { return 'be\u015f'; }; // beş
  five.thai = function() { return '\u0e2b\u0e49\u0e32'; }; // ห้า
  five.ukrainian = function() { return '\u043f\u2019\u044f\u0442\u044c'; }; // п’ять
  five.welsh = function() { return 'pump'; };

  five.morseCode = function() { return '.....'; };
  five.base = function(i) { return five().toString(i); };
  five.binary = function() { return five.base(2); };
  five.octal = function() { return five.base(8); };
  five.hex = function() { return five.base(16); };
  five.mdFive = function() { return '30056e1cab7a61d256fc8edd970d14f5'; };

  five.negative = function() { return -5; };
  five.loud = function (lang) { return (lang && typeof five[lang] === 'function') ? five[lang]().toUpperCase() : five.english().toUpperCase();};
  five.smooth = function() { return 'S'; };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    while(new Date() < returnIn);

    return five();
  };

  five.isFive = function(a) { return a === five(); };

  five.map = function(array) { return array.map(five); };
  five.filter = function(array) { return array.filter(five.isFive); };
  five.reduce = function(array) { return array.reduce(five); };

  five.fab = function() {
    return ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber'];
  };

  five.jackson = function() {
    return ['Jackie','Tito','Jermaine','Marlon','Michael'];
  };

  /**
   * References "I got 5 on it" by Luniz.
   * http://en.wikipedia.org/wiki/I_Got_5_on_It
   */
  five.luniz = function() {
    return 'I Got ' + five() + ' on It';
  };
  
  five.funk = function(){
    return five() + ' bad boys with the power to rock you';
  };
  
  five.async = function(callback) {
    process.nextTick(function() {
      callback(null, five());
    });
  };

  five.r = function () { return '\u00a35'; }; // £5

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

  five.oclock = function() { return '\ud83d\udd54'; }; // 🕔

  five.guys = function() { return '\ud83c\udf54'; }; // 🍔

  five.valueOf = five;

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (typeof define === 'function' && define.amd){
    define(five);
  } else if (window) {
    window.five = five;
  }
}());
