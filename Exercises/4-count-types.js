'use strict';

const countTypesInArray = (arr) => {
  let count = {};
  for (element of arr) {
    if (typeof (element) === 'number') {
      count.number += 1;
    }
    else {
      if (typeof (element) === 'string') {
        count.string += 1;
      }
      else {
        count.boolean += 1;
      }
    }
  }
  return count;
};

module.exports = { countTypesInArray };
