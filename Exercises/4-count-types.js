'use strict';

const countTypesInArray = (arr) => {
  const count = {};
  for (const element of arr) {
    const type = typeof element;
    const quantity = count[type] || 0;
    count[type] = quantity + 1;
  }
  return count;
};

module.exports = { countTypesInArray };
