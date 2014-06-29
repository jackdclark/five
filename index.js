var five = function() { return 5; };

module.exports = five;

five.upHigh = function() { return '⁵'; };
five.downLow = function() { return '₅'; };
five.roman = function() { return 'V'; };

five.tooSlow = function() {
  var returnIn = new Date(new Date().valueOf() + 555);

  do {} while(new Date() < returnIn);

  return five();
};
