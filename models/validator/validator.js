'use strict';

class Validator {
  constructor(schema) {
    this.schema = schema;
  }
  isString(input) {
    return typeof input === 'string';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isFunc(input) {
    return typeof input === 'function';
  }

  isArray(input) {
    return Array.isArray(input);
  }

  isObj(input) {
    return typeof input === 'object';
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }
  isTruthy(input) {
    if (input) return true;
    else return false;
  }

}
module.exports = Validator;