var assert = require('assert');
var five = require('../index');

describe('five', function() {

  it('gives you five', function() {
    assert.equal(5, five());
  });

  it('does not give you not five', function() {
    assert.notEqual(6, five());
  });
});
