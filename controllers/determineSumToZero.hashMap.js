const determineSumToZero = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (map.has(-(arr[i] + arr[j]))) {
        if (Object.is(-(arr[i] + arr[j]), -0)) {
          return [arr[i], arr[j], 0];
        }
        return [arr[i], arr[j], -(arr[i] + arr[j])];
      }
    }
  }

  return [];
};

module.exports = determineSumToZero;
