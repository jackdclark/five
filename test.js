var assert = require('assert');
var five = require('./');

assert.equal(5, five(), 'Five should give you five');
assert.notEqual(6, five(), 'Five should not give you not five');

assert.equal('⁵', five.upHigh(), 'An up high five should be a superscripted 5');
assert.equal('₅', five.downLow(), 'A down low five should be a subscripted 5');
assert.equal('V', five.roman(), 'A roman five should be a V');

assert.equal('خمسة', five.arabic(), 'A arabic five should be خمسة');
assert.equal('beş', five.azerbaijani(), 'A azerbaijani five should be beş');
assert.equal('bost', five.basque(), 'A Basque five should be bost');
assert.equal('pet', five.bosnian(), 'A bosnian five should be pet');
assert.equal('пет', five.bulgarian(), 'A bulgarian five should be пет');
assert.equal('cinc', five.catalan(), 'A catalan five should be cinc');
assert.equal('五', five.chinese(), 'A chinese five should be 五');
assert.equal('tahlapi', five.choctaw(), 'A choctaw five should be tahlapi');
assert.equal('pet', five.croatian(), 'A croatian five should be pet');
assert.equal('pět', five.czech(), 'A czech five should be pět');
assert.equal('hen', five.dovah(), 'A dovah five should be hen');
assert.equal('vijf', five.dutch(), 'A dutch five should be vijf');
assert.equal('lempe', five.elvish(), 'A elvish five should be lempe');
assert.equal('five', five.english(), 'A english five should be Five');
assert.equal('viisi', five.finnish(), 'A finnish five should be viisi');
assert.equal('cinq', five.french(), 'A french five should be cinq');
assert.equal('fünf', five.german(), 'A german five should be fünf');
assert.equal('חמש', five.hebrew(), 'A hebrew five should be חמש');
assert.equal('पांच', five.hindi(), 'A hindi five should be पांच');
assert.equal('lima', five.indonesian(), 'A indonesian five should be lima');
assert.equal('cúig', five.irish(), 'A irish five should be cúig');
assert.equal('cinque', five.italian(), 'A italian five should be cinque');
assert.equal('五', five.japanese(), 'A japanese five should be 五');
assert.equal('ಐದು', five.kannada(), 'A kannada five should be ಐದು');
assert.equal('vagh', five.klingon(), 'A klingon five should be vagh');
assert.equal('오', five.korean(), 'A korean five should be 오');
assert.equal('quinque', five.latin(), 'A latin five should be quinque');
assert.equal('таван', five.mongolian(), 'A mongolian five should be таван');
assert.equal('پنج', five.persian(), 'A persian five should be پنج');
assert.equal('ivefay', five.piglatin(), 'A piglatin five should be ivefay');
assert.equal('pięć', five.polish(), 'A polish five should be pięć');
assert.equal('cinco', five.portuguese(), 'A portuguese five should be cinco');
assert.equal('cinci', five.romanian(), 'A romanian five should be cinci');
assert.equal('пять', five.russian(), 'A russian five should be пять');
assert.equal('pet', five.slovenian(), 'A slovenian five should be pet');
assert.equal('cinco', five.spanish(), 'A spanish five should be cinco');
assert.equal('fem', five.swedish(), 'A swedish five should be fem');
assert.equal('ஐந்து', five.tamil(), 'A tamil five should be ஐந்து');
assert.equal('ఐదు', five.telugu(), 'A telugu five should be ఐదు');
assert.equal('ห้า', five.thai(), 'A thai five should be ห้า');

assert.equal('di-di-di-di-dit', five.morseCode(), 'A five in morse code should be di-di-di-di-dit');
assert.equal('101', five.binary(), 'A binary five should be 101');
assert.equal('5', five.octal(), 'An octal five should be 5');
assert.equal('5', five.hex(), 'An hexadecimal five should be 5');

assert.equal('-5', five.negative(), 'A negative five should be -5');
assert.equal('FIVE', five.loud(), 'A loud five should be FIVE');
assert.equal('S', five.smooth(), 'A smooth five should be S');

var now = new Date().valueOf();
var slowFive = five.tooSlow();
var finishes = new Date().valueOf();

assert.equal(5, slowFive, 'A too slow five should still be five');
assert.ok((finishes - now) > 500, 'A too slow five should take longer than 500 milliseconds to be returned, blocking execution and generally being a bad idea');

assert.equal(JSON.stringify(["Juwan Howard","Ray Jackson","Jimmy King","Jalen Rose","Chris Webber"]), JSON.stringify(five.fab()), 'A fab five should be the 1991-1993 Michigan Mens Basketball Team');

assert.equal(JSON.stringify([5, 5, 5]), JSON.stringify(five.map([1, 2, 3])));
assert.equal(5, five.reduce([1, 2, 3]));

process.exit(0);
