var assert = require('assert');
var five = require('./');

assert.equal(5, five(), 'Five should give you five');
assert.notEqual(6, five(), 'Five should not give you not five');

assert.equal('The Law of Fives states simply that: All things happen in fives, or are divisible by or are multiples of five, or are somehow directly or indirectly appropriate to 5. The Law of Fives is never wrong.', five.law(), 'The Law of Fives should never be wrong');

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
assert.equal('wǔ', five.chinese('pinyin'), 'A chinese five in Pīnyīn should be wǔ');
assert.equal('伍', five.chinese('financial'), 'A chinese five in financial contexts should be 伍');
assert.equal('tahlapi', five.choctaw(), 'A choctaw five should be tahlapi');
assert.equal('pet', five.croatian(), 'A croatian five should be pet');
assert.equal('pět', five.czech(), 'A czech five should be pět');
assert.equal('mek', five.dothraki(), 'A dothraki five should be mek');
assert.equal('hen', five.dovah(), 'A dovah five should be hen');
assert.equal('vijf', five.dutch(), 'A dutch five should be vijf');
assert.equal('lempë', five.elvish(), 'An elvish five should be lempë');
assert.equal('lempë', five.elvish('quenya'), 'An elvish five in Quenya should be lempë');
assert.equal('leben', five.elvish('sindarin'), 'An elvish five in Sindarin should be leben');
assert.equal('five', five.english(), 'A english five should be five');
assert.equal('kvin', five.esperanto(), 'An esperanto five should be kvin');
assert.equal('viis', five.estonian(), 'An estonian five should be viis');
assert.equal('viisi', five.finnish(), 'A finnish five should be viisi');
assert.equal('viisi', five.flatgerman(), 'A flatgerman five should be fief');
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
assert.equal('ħamsa', five.maltese(), ' A maltese five should be ħamsa');
assert.equal('таван', five.mongolian(), 'A mongolian five should be таван');
assert.equal('पाँच', five.nepali(), 'A nepali five should be पाँच');
assert.equal('fem', five.norwegian(), 'A norwegian five should be fem');
assert.equal('پنج', five.persian(), 'A persian five should be پنج');
assert.equal('ivefay', five.piglatin(), 'A piglatin five should be ivefay');
assert.equal('pięć', five.polish(), 'A polish five should be pięć');
assert.equal('cinco', five.portuguese(), 'A portuguese five should be cinco');
assert.equal('ਪੰਜ', five.punjabi(), 'A punjabi five should be ਪੰਜ');
assert.equal('cinci', five.romanian(), 'A romanian five should be cinci');
assert.equal('пять', five.russian(), 'A russian five should be пять');
assert.equal('pet', five.serbian(), 'A serbian five should be pet');
assert.equal('පහ', five.sinhala(), 'A sinhala five should be පහ');
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
assert.equal('1.618033988749895', five.golden(), 'A golden five is Phive');

assert.equal('-5', five.negative(), 'A negative five should be -5');
assert.equal('FIVE', five.loud(), 'A loud five should be FIVE');
assert.equal('IVEFAY', five.loud('piglatin'), 'A loud five in Pig Latin should be IVEFAY');
assert.equal('ПЯТЬ', five.loud('russian'), 'A loud five in Russian should be ПЯТЬ');
assert.equal('S', five.smooth(), 'A smooth five should be S');

assert.equal('🕔', five.oclock(), 'A unicode symbol for five o\'clock should be U+1F554');
assert.equal('🍺', five.oclockSomewhere(), 'A unicode symbol for \'It\'s five o\'clock somewhere\' should be U+1F37A');
assert.equal('🍔', five.guys(), 'A unicode symbol for Five Guys should be U+1F354');
assert.equal('$5.00', five.bucks(), 'Five bucks in USD should be $5.00');

assert.equal('o/', five.high(), 'A High five should be o/');

var now = new Date().valueOf();
var slowFive = five.tooSlow();
var finishes = new Date().valueOf();

assert.equal(5, slowFive, 'A too slow five should still be five');
assert.ok((finishes - now) > 500, 'A too slow five should take longer than 500 milliseconds to be returned, blocking execution and generally being a bad idea');


assert.equal(JSON.stringify(['Jackie','Tito','Jermaine','Marlon','Michael']), JSON.stringify(five.jackson()), 'A Jackson five should be the five members of the 70\'s pop family group the Jackson 5');

assert.equal(JSON.stringify(['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']), JSON.stringify(five.fab()), 'A fab five should be the 1991-1993 Michigan Mens Basketball Team');

assert.equal(JSON.stringify(['Sean Conlon', 'Ritchie Neville', 'Scott Robinson', 'Jason \'J\' Brown', 'Abz Love']), JSON.stringify(five.members()), 'A five five should be the 90\'s boy band 5ive');

assert.equal(JSON.stringify(['5ive', 'Invincible', 'Kingsize']), JSON.stringify(five.discography()), 'A five discography should be the studio albums released by the 90\'s boy band 5ive');

assert.equal(JSON.stringify(['Slam Dunk (Da Funk)', 'When the Lights Go Out', 'Got the Feelin\'', 'Everybody Get Up', 'It\'s the Things You Do', 'Until the Time Is Through', 'If Ya Gettin\' Down', 'Keep On Movin\'', 'Don\'t Wanna Let You Go', 'We Will Rock You', 'Let\'s Dance', 'Closer to Me', 'Rock the Party', 'I Wish It Could Be Christmas Everyday']), JSON.stringify(five.singles()), 'A five singles should be the singles released by the 90\'s boy band 5ive');

assert.equal(JSON.stringify(['Tigress','Viper','Crane','Monkey','Mantis']), JSON.stringify(five.furious()), 'A Furious five should be the five fictional members of the ninja group Furious Five from the movie Kung-Fu Panda');

assert.equal(JSON.stringify(['Julian', 'Dick', 'George', 'Anne', 'Timmy']), JSON.stringify(five.famous()), 'A Famous five should be the five central characters of the series of Enid Blighton novels');

assert.equal('Interstella 5555: The 5tory of the 5ecret 5tar 5ystem', five.fiveFiveFive(), 'FiveFiveFiveFive should be Interstella 5555: The 5tory of the 5ecret 5tar 5ystem');

assert.equal(five.luniz(), 'I Got 5 on It', 'A Luniz five should be the song title of their most famous hit');

assert.equal(five.funk(), '5 bad boys with the power to rock you', 'A funked five should be a group of bad boys with the power to rock you');

assert.equal(true, five.isFive(five()));
assert.equal(false, five.isFive(10));

assert.equal(JSON.stringify([5, 5]), JSON.stringify(five.filter([5, true, 5])));
assert.equal(JSON.stringify([5, 5, 5]), JSON.stringify(five.map([1, 2, 3])));
assert.equal(5, five.reduce([1, 2, 3]));

assert.equal('£5', five.r(), 'A fiver should be 5 GBP');

assert.equal('5€', five.euro());

assert.equal('$5', five.dollar());

assert.equal('5678901234', five.rot('0123456789'), 'Numbers should be rotated');
assert.equal('fghijklmnopqrstuvwxyzabcde', five.rot('abcdefghijklmnopqrstuvwxyz'), 'Small letters should be rotated');
assert.equal('FGHIJKLMNOPQRSTUVWXYZABCDE', five.rot('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'Capital letters too');
assert.equal('$_$ -,- @.@?', five.rot('$_$ -,- @.@?'), 'Emoticons should not be rotated');

assert.equal(five * five, 25);
assert.equal(five + five, 10);
assert.equal(five / five, 1);
assert.equal(five - five, 0);
assert.equal((five / five) * (five), five);
assert.equal(120, five.factorial());

var fiveEmitter = five.emitter();
var emitterTested = false;

fiveEmitter.on('five', function(e) {
  assert.equal(5, e, 'Five event emitter should only emit 5');
  emitterTested = true;
});

setTimeout(function() {
  if(!emitterTested) {
    console.error('The five event emitter did something unexpected! I hope you\'re not using this feature in production');
    process.exit(1);
  }
  process.exit(0);
}, 100);

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
