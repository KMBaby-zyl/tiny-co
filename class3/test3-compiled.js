"use strict";

var regeneratorRuntime = require("regenerator-runtime");
var co = require('co');

var _marked = [run, gen].map(regeneratorRuntime.mark);


function sleep() {
  return function (cb) {
    setTimeout(cb, 2000);
  };
};

// generator
function run(x) {
  return regeneratorRuntime.wrap(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return sleep();

        case 2:
          console.log(x);
          return _context.abrupt("return", x);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function gen() {
  return regeneratorRuntime.wrap(function gen$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return run(2);

        case 2:
          _context2.next = 4;
          return run(3);

        case 4:
          console.log(1);

          //
          _context2.next = 7;
          return [run(2), run(3)];

        case 7:
          console.log(1);

          //
          _context2.next = 10;
          return { 1: run(2), 2: run(3) };

        case 10:
          console.log(1);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

co(gen);
