'use strict';

const Validator = require('../validator/validator.js');
describe('validator module performs basic validation of', () => {

  const schema = {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    hair: {type: 'object'},
    favoriteFoods: {type: 'array', valueType: 'string'},
    married: {type: 'boolean'},
    kids: {type: 'number'},
  };
  let validator = new Validator(schema); 
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = { x: 'y' };
  let func = () => { };
  let bool = false;

  it('returns true when given a string', () => {
    expect(validator.isString(str)).toBeTruthy();
  }); 
  it('returns true when given a number', () => {
    expect(validator.isNumber(num)).toBeTruthy();
  });   
  it('returns true when given an array', () => {
    expect(validator.isArray(arr)).toBeTruthy();
  }); 
  it('returns true when given an object', () => {
    expect(validator.isObj(obj)).toBeTruthy();
  });   
  it('returns true when given a function', () => {
    expect(validator.isFunc(func)).toBeTruthy();
  });
  it('returns true when given a boolean', () => {
    expect(validator.isBoolean(bool)).toBeTruthy();
  });
});