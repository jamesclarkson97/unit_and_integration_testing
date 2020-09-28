var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers together', function() {
    calculator.add('1')
    calculator.operatorClick('+')
    calculator.add('4')
    // calulator.opperatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5)
  })


});
