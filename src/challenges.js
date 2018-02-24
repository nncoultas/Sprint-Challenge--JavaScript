/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const mapArr = [];
  each(elements, item => (mapArr.push(cb(item))));
  return mapArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let call = 0;
  return (...args) => {
    if (call === n) return null;
    call++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = [];
  return (...args) => {
    const keys = Object.keys(cache);
    const argString = args.toString();
    if (keys.indexOf(argString) !== -1) {
      return cache[argString];
    }
    const answer = cb(...args);
    cache[argString] = answer;
    return answer;
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};


const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let tester = null;
  let ans = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((elem) => {
      if (tester === null && typeof elem !== 'object') {
        tester = object[elem];
      }
      if (typeof object[elem] === 'object') {
        return checkLeaves(object[elem]);
      }
      if (object[elem] !== tester) {
        ans = false;
      }
    });
  };
  checkLeaves(obj);
  return ans;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArr = newArr.concat(flatten(elements[i]));
    } else {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
