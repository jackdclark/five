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
  five.japanese = function() { return '五' };
  five.mayan = function() { return '—' };


  five.morseCode = function() { return 'di-di-di-di-dit' };
  five.binary = function() { return '101'; };
  five.octal = function() { return '5'; };
  
  five.negative = function() { return -5; }
  five.loud = function() { return "FIVE"; }
  five.smooth = function() { return "S"; }
  
  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

    return five();
  };
  
  five.helloWorld = function(){
    var base = 'Hello World ', result='';
    for (i=0; i<5; i++){
      result += base;
    }
    return result;
  }

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
