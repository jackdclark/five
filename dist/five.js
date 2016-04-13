(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
var leftPad = require('left-pad');

(function () {

  var five = function() { return 5; };

  five.leftPad = leftPad.bind(null, five());

  five.upHigh = function() { return '⁵'; };
  five.downLow = function() { return '₅'; };
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

  five.arabic = function() { return 'خمسة'; };
  five.azerbaijani = function() { return 'beş'; };
  five.basque = function() { return 'bost'; };
  five.belarusian = function() { return 'пяць'; };
  five.bosnian = function() { return 'pet'; };
  five.bulgarian = function() { return 'пет'; };
  five.catalan = function() { return 'cinc'; };
  five.chinese = function() { return '五'; };
  five.choctaw = function() { return 'tahlapi'; };
  five.croatian = function() { return 'pet'; };
  five.czech = function() { return 'pět'; };
  five.dothraki = function() { return 'mek'; };
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
  five.icelandic = function() { return 'fimm'; };
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

  five.morseCode = function() { return '.....'; };
  five.base = function(i) { return five().toString(i); }
  five.binary = function() { return five.base(2); };
  five.octal = function() { return five.base(8); };
  five.hex = function() { return five.base(16); };
  five.mdFive = function() { return '30056e1cab7a61d256fc8edd970d14f5'; };

  five.negative = function() { return -5; };
  five.loud = function (lang) { return (lang && typeof five[lang] === 'function') ? five[lang]().toUpperCase() : five.english().toUpperCase();};
  five.smooth = function() { return 'S'; };

  five.tooSlow = function() {
    var returnIn = new Date(new Date().valueOf() + 555);

    do {} while(new Date() < returnIn);

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
    return "I Got " + five() + " on It";
  }

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

  five.oclock = function() { return '🕔'; };

  five.valueOf = five;

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = five;
  } else if (typeof define === 'function' && define.amd){
    define(five);
  } else if (window) {
    window.five = five;
  }
}());

}).call(this,require('_process'))
},{"_process":2,"left-pad":3}],2:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}

},{}]},{},[1]);
