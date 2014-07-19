(function () {

  var five = function() { return 5; };

  five.upHigh = function() { return '⁵'; };
  five.downLow = function() { return '₅'; };
  five.roman = function() { return 'V'; };

  five.arabic = function() { return 'خمسة' };
  five.croatian = function() { return 'pet' };
  five.czech = function() { return 'pět' };
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
  five.japanese = function() { return '五' };
  five.chinese = five.japanese;
  five.norwegian = function() { return 'fem' };
  five.greek = function() { return 'ε' };

  five.morseCode = function() { return 'di-di-di-di-dit' };
  five.binary = function() { return '101'; };
  five.octal = function() { return '5'; };

  five.fibonacci = function() { return 5; };
  five.factorial = function() { return 120; };

  five.bool = function() { return (five() === 5); };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

    return five();
  };

  five.map = function(array) { return array.map(five); }
  five.reduce = function(array) { return array.reduce(five); }

  five.fab = function() {
    return ["Juwan Howard","Ray Jackson","Jimmy King","Jalen Rose","Chris Weber"];
  };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (window) {
    window.five = five;
  }
}());
