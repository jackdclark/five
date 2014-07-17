(function () {

  var five = function() { return 5; };

  five.upHigh = function() { return '⁵'; };
  five.downLow = function() { return '₅'; };
  five.roman = function() { return 'V'; };

  five.arabic = function() { return 'خمسة' };
  five.croatian = function() { return 'pet' };
  five.czech = function() { return 'pět' };
  five.dutch = function() { return 'vijf' };
  five.english = function() { return 'Five' };
  five.finnish = function() { return 'viisi' };
  five.french = function() { return 'cinq' };
  five.german = function() { return 'fünf' };
  five.irish = function() { return 'cúig' };
  five.mongolian = function() { return 'таван' };
  five.polish = function() { return 'pięć' };
  five.slovenian = function() { return 'pet' };
  five.swedish = function() { return 'fem' };
  five.thai = function() { return 'ห้า' };
  five.choctaw = function() { return 'tahlapi' };
  five.piglatin = function() { return 'ivefay' };
  five.italian = function() { return 'cinque' };
  five.spanish = function() { return 'cinco' };
  five.morseCode = function() { return 'di-di-di-di-dit' };
  five.binary = function() { return '101'; };
  five.octal = function() { return '5'; };
  five.hexadecimal = function() { return '0x5'; };

  five.negative = function() { return -5; }
  five.loud = function() { return "FIVE"; }
  five.smooth = function() { return "S"; }
  five.flip = function() { return 'ϛ'; };
  five.ascii = function() { return ' _____\n| ____|\n| |__\n|___ \\\n ___) | \n|____/'; };

  five.sqrt = function() { return Math.sqrt(5); };
  five.pow = function(n) { n = typeof n === 'undefined' ? 2 : n; return Math.pow(5, n); };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

    return five();
  };

  five.map = function(array) { return array.map(five); }
  five.reduce = function(array) { return array.reduce(five); }

  five.fab = function() {
    return ["Juwan Howard","Ray Jackson","Jimmy King","Jalen Rose","Chris Webber"];
  };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (window) {
    window.five = five;
  }
}());
