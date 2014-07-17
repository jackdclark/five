var assert = require('assert');
var five = require('./');

assert.equal(5, five(), 'Five should give you five');
assert.notEqual(6, five(), 'Five should not give you not five');

assert.equal('⁵', five.upHigh(), 'An up high five should be a superscripted 5');
assert.equal('₅', five.downLow(), 'A down low five should be a subscripted 5');
assert.equal('V', five.roman(), 'A roman five should be a V');

assert.equal('خمسة', five.arabic(), 'An Arabic five should be خمسة');
assert.equal('pet', five.croatian(), 'A Croatian five should be pet');
assert.equal('pět', five.czech(), 'A Czech five should be pět');
assert.equal('Five', five.english(), 'An English five should be Five');
assert.equal('cinq', five.french(), 'A French five should be cinq');
assert.equal('fünf', five.german(), 'A German five should be fünf');
assert.equal('cúig', five.irish(), 'An Irish five should be cúig');
assert.equal('таван', five.mongolian(), 'A Mongolian five should be таван');
assert.equal('pięć', five.polish(), 'A Polish five should be pięć');
assert.equal('cinco', five.spanish(), 'A Spanish five should be cinco');
assert.equal('fem', five.swedish(), 'A Swedish five should be fem');
assert.equal('ห้า', five.thai(), 'A Thai five should be ห้า');

assert.equal('di-di-di-di-dit', five.morseCode(), 'A five in morse code should be di-di-di-di-dit');
assert.equal('101', five.binary(), 'A binary five should be 101');
assert.equal('5', five.octal(), 'An octal five should be 5');

var now = new Date().valueOf();
var slowFive = five.tooSlow();
var finishes = new Date().valueOf();

assert.equal(5, slowFive, 'A too slow five should still be five');
assert.ok((finishes - now) > 500, 'A too slow five should take longer than 500 milliseconds to be returned, blocking execution and generally being a bad idea');

process.exit(0);
