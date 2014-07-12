(function () {
  var five = function() { return 5; };

  five.upHigh = function() { return '⁵'; };
  five.downLow = function() { return '₅'; };
  five.roman = function() { return 'V'; };

  five.arabic = function() { return 'خمسة' };
  five.croatian = function() { return 'pet' };
  five.czech = function() { return 'pět' };
  five.english = function() { return 'Five' };
  five.french = function() { return 'cinq' };
  five.german = function() { return 'fünf' };
  five.irish = function() { return 'cúig' };
  five.mongolian = function() { return 'таван' };
  five.polish = function() { return 'pięć' };
  five.swedish = function() { return 'fem' };
  five.thai = function() { return 'ห้า' };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

    return five();
  };

  five.one = function() { return Math.pow(five() + five() - five(), five() - five()); };
  five.two = function() { return (five() + five() + five() - five()) / five(); };
  five.three = function() { return five() - ((five() / five()) + (five() / five())); };
  five.four = function() { return (five() + five() + five() + five()) / five(); };
  five.five = function() { return five() + five() + five() - five() - five() };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (window) {
    window.five = five;
  }
}());
