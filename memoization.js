const memoized = (fn) => {
  const cache = {};
  return (...args) => {
    const stringifyArgs = JSON.stringify(args);
    if (cache[stringifyArgs]) {
      console.log(`presents in the cache for: ${stringifyArgs}`);
      return cache[stringifyArgs];
    } else {
      console.log(`generating the output for: ${stringifyArgs}`);
      const output = fn.apply(this, args);
      cache[stringifyArgs] = output;
      return output;
    }
  };
};

const addition = (a, b) => {
  return a + b;
};

const memoizedAddition = memoized(addition);

console.log(memoizedAddition(1, 2));
console.log(memoizedAddition(1, 2));

const memoizedFactorial = memoized((num) => {
  if (num === 1) return 1;
  else return num * memoizedFactorial(num - 1);
});

console.log(memoizedFactorial(3));
console.log(memoizedFactorial(4));
