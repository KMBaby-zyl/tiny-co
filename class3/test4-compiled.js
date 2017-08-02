"use strict";

var regeneratorRuntime = require("regenerator-runtime");
var promise = require('promise');

var run = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var a;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sleep(2);

          case 2:
            a = _context.sent;

            console.log(1);

            sleep(3);
            console.log(4);
            return _context.abrupt("return", a);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


//
// let a = function *(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
//
// a();


function sleep(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(x);
      resolve(x);
    }, 2000);
  });
};

run().then(function (data) {
  console.log(data);
});
