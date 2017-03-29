'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subtract;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SUBTRACT calculates the difference of two numbers.
// Copyright 2015 JC Fisher

function subtract() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return _error2.default.na;
  }

  // decompose values into a and b.
  var a = values[0],
      b = values[1];

  // Return `#VALUE!` if either a or b is not a number.

  if (!(0, _isnumber2.default)(a) || !(0, _isnumber2.default)(b)) {
    return _error2.default.value;
  }

  // Return the difference.
  return a - b;
}
module.exports = exports['default'];