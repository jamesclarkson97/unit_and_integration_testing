const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { element } = require('protractor');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should let the number buttons update the display of the running total', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10')
  })

});
