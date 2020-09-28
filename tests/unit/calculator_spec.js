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

  it('can subtract two numbers', function() {
    calculator.add('7')
    calculator.operatorClick('-')
    calculator.subtract('4')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('it can multiply two numbers', function() {
    calculator.add('3')
    calculator.operatorClick('*')
    calculator.multiply('5')
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it ('it can divide two numbers', function() {
    calculator.add('21')
    calculator.operatorClick('/')
    calculator.divide('7')
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it ('it can concatenate multiple numbers together', function() {
    calculator.numberClick('2')
    calculator.numberClick('4')
    calculator.numberClick('6')
    assert.strictEqual(calculator.runningTotal, 246)
  })


});
