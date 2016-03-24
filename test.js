var assert = require('assert');
var five = require('./');

assert.equal(5, five(), 'Five should give you five');
assert.notEqual(6, five(), 'Five should not give you not five');

assert.equal(five.convertTo(5), 5);
assert.equal(five.convertTo(3), 3);
assert.equal(five.convertTo(665456), 665456);

assert.equal('⁵', five.upHigh(), 'An up high five should be a superscripted 5');
assert.equal('₅', five.downLow(), 'A down low five should be a subscripted 5');
assert.equal('V', five.roman(), 'A roman five should be a V');


assert.equal('خمسة', five.arabic(), 'A arabic five should be خمسة');
assert.equal('beş', five.azerbaijani(), 'A azerbaijani five should be beş');
assert.equal('bost', five.basque(), 'A basque five should be bost');
assert.equal('пяць', five.belarusian(), 'A belarusian five should be пяць');
assert.equal('pet', five.bosnian(), 'A bosnian five should be pet');
assert.equal('пет', five.bulgarian(), 'A bulgarian five should be пет');
assert.equal('cinc', five.catalan(), 'A catalan five should be cinc');
assert.equal('五', five.chinese(), 'A chinese five should be 五');
assert.equal('tahlapi', five.choctaw(), 'A choctaw five should be tahlapi');
assert.equal('pet', five.croatian(), 'A croatian five should be pet');
assert.equal('pět', five.czech(), 'A czech five should be pět');
assert.equal('mek', five.dothraki(), 'A dothraki five should be mek');
assert.equal('hen', five.dovah(), 'A dovah five should be hen');
assert.equal('vijf', five.dutch(), 'A dutch five should be vijf');
assert.equal('lempe', five.elvish(), 'A elvish five should be lempe');
assert.equal('five', five.english(), 'A english five should be five');
assert.equal('viis', five.estonian(), 'An estonian five should be viis');
assert.equal('viisi', five.finnish(), 'A finnish five should be viisi');
assert.equal('cinq', five.french(), 'A french five should be cinq');
assert.equal('fünf', five.german(), 'A german five should be fünf');
assert.equal('πέντε', five.greek(), 'A greek five should be πέντε');
assert.equal('חמש', five.hebrew(), 'A hebrew five should be חמש');
assert.equal('पांच', five.hindi(), 'A hindi five should be पांच');
assert.equal('öt', five.hungarian(), 'A hungarian five should be öt');
assert.equal('fimm', five.icelandic(), 'An icelandic five should be fimm');
assert.equal('lima', five.indonesian(), 'A indonesian five should be lima');
assert.equal('cúig', five.irish(), 'A irish five should be cúig');
assert.equal('cinque', five.italian(), 'A italian five should be cinque');
assert.equal('五', five.japanese(), 'A japanese five should be 五');
assert.equal('ಐದು', five.kannada(), 'A kannada five should be ಐದು');
assert.equal('vagh', five.klingon(), 'A klingon five should be vagh');
assert.equal('오', five.korean(), 'A korean five should be 오');
assert.equal('quinque', five.latin(), 'A latin five should be quinque');
assert.equal('pieci', five.latvian(), 'A latvian five should be pieci');
assert.equal('penki', five.lithuanian(), 'A lithuanian five should be penki');
assert.equal('таван', five.mongolian(), 'A mongolian five should be таван');
assert.equal('fem', five.norwegian(), 'A norwegian five should be fem');
assert.equal('پنج', five.persian(), 'A persian five should be پنج');
assert.equal('ivefay', five.piglatin(), 'A piglatin five should be ivefay');
assert.equal('pięć', five.polish(), 'A polish five should be pięć');
assert.equal('cinco', five.portuguese(), 'A portuguese five should be cinco');
assert.equal('cinci', five.romanian(), 'A romanian five should be cinci');
assert.equal('пять', five.russian(), 'A russian five should be пять');
assert.equal('pet', five.serbian(), 'A serbian five should be pet');
assert.equal('päť', five.slovakian(), 'A slovakian five should be päť');
assert.equal('pet', five.slovenian(), 'A slovenian five should be pet');
assert.equal('cinco', five.spanish(), 'A spanish five should be cinco');
assert.equal('fem', five.swedish(), 'A swedish five should be fem');
assert.equal('ஐந்து', five.tamil(), 'A tamil five should be ஐந்து');
assert.equal('ఐదు', five.telugu(), 'A telugu five should be ఐదు');
assert.equal('ห้า', five.thai(), 'A thai five should be ห้า');
assert.equal('beş', five.turkish(), 'A turkish five should be beş');
assert.equal('п’ять', five.ukrainian(), 'A ukrainian five should be п’ять');

assert.equal('.....', five.morseCode(), 'A five in morse code should be .....');
assert.equal('10', five.base(5), 'A quinary five should be 10');
assert.equal('11', five.base(4), 'An quaternary five should be 11')
assert.equal('101', five.binary(), 'A binary five should be 101');
assert.equal('5', five.octal(), 'An octal five should be 5');
assert.equal('5', five.hex(), 'An hexadecimal five should be 5');
assert.equal('30056e1cab7a61d256fc8edd970d14f5', five.mdFive(), 'md5 checksum of "five" should be 30056e1cab7a61d256fc8edd970d14f5');

assert.equal('-5', five.negative(), 'A negative five should be -5');
assert.equal('FIVE', five.loud(), 'A loud five should be FIVE');
assert.equal('IVEFAY', five.loud('piglatin'), 'A loud five in Pig Latin should be IVEFAY');
assert.equal('ПЯТЬ', five.loud('russian'), 'A loud five in Russian should be ПЯТЬ');
assert.equal('S', five.smooth(), 'A smooth five should be S');

assert.equal('🕔', five.oclock(), 'A unicode symbol for five o\'clock should be U+1F554');

var now = new Date().valueOf();
var slowFive = five.tooSlow();
var finishes = new Date().valueOf();

assert.equal(5, slowFive, 'A too slow five should still be five');
assert.ok((finishes - now) > 500, 'A too slow five should take longer than 500 milliseconds to be returned, blocking execution and generally being a bad idea');


assert.equal(JSON.stringify(['Jackie','Tito','Jermaine','Marlon','Michael']), JSON.stringify(five.jackson()), 'A Jackson five should be the five members of the 70\'s pop family group the Jackson 5');

assert.equal(JSON.stringify(['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']), JSON.stringify(five.fab()), 'A fab five should be the 1991-1993 Michigan Mens Basketball Team');

assert.equal(five.luniz(), 'I Got 5 on It', 'A Luniz five should be the song title of their most famous hit');

assert.equal(true, five.isFive(five()));
assert.equal(false, five.isFive(10));

assert.equal(JSON.stringify([5, 5]), JSON.stringify(five.filter([5, true, 5])));
assert.equal(JSON.stringify([5, 5, 5]), JSON.stringify(five.map([1, 2, 3])));
assert.equal(5, five.reduce([1, 2, 3]));

assert.equal('5678901234', five.rot('0123456789'), 'Numbers should be rotated');
assert.equal('fghijklmnopqrstuvwxyzabcde', five.rot('abcdefghijklmnopqrstuvwxyz'), 'Small letters should be rotated');
assert.equal('FGHIJKLMNOPQRSTUVWXYZABCDE', five.rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'Capital letters too');
assert.equal('$_$ -,- @.@?', five.rot('$_$ -,- @.@?'), 'Emoticons should not be rotated');

assert.equal(five * five, 25);
assert.equal(five + five, 10);
assert.equal(five / five, 1);
assert.equal(five - five, 0);
assert.equal((five / five) * (five), five);
assert.equal(five.emoji(), '5️⃣', 'Should always return emoji');

var asyncTests = 1;
five.async(function(err, five) {
	assert.equal(err, null, 'Async should not result in an error.');
	assert.equal(five, 5, 'Async should pass 5 to callback.');
	asyncTests--;
});

setInterval(function() {
	if (!asyncTests) {
		process.exit(0);
	}
}, 100);
