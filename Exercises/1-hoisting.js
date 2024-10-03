'use strict';

const fn = () => {
  i = 2;
  for (var i; i < 10; i++) {
    console.log(i);
  }
};

module.exports = { fn };
