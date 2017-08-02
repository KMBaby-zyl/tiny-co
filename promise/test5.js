"use strict";

var st = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setTimeout(function () {
              return console.log(2);
            }, 100);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, this);
  }));

  return function st() {
    return _ref.apply(this, arguments);
  };
}();

var test_async = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(1);
            _context3.next = 3;
            return st();

          case 3:
            console.log(3);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, this);
  }));

  return function test_async() {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var a = regeneratorRuntime.mark(function a() {
  var a;
  return regeneratorRuntime.wrap(function a$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          a = _context.sent;
          _context.next = 5;
          return 2;

        case 5:
          _context.next = 7;
          return 3;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, a, this);
});

var b = {
  b: function b() {
    console.log(undefined);
  },

  c: function c() {
    console.log(this);
  }
};
