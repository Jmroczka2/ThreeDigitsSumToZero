const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];
  const newArray = [];
  const pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
};

// const testQuickSort = [90, 1, 2, -1, 50, 30, 40, 10, 11];
// console.log(quickSort(testQuickSort));

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left + 1 < right) {
    const middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle;
    } else if (target > arr[middle]) {
      left = middle;
    }
  }

  if (arr[left] === target) { return left; }
  if (arr[right] === target) { return right; }

  return -1;
};

// console.log(binarySearch([0, 1, 2, 3, 4, 10, 12, 40, 60, 60, 60, 90], 60));

const determineSumToZero = (arr) => {
  const sortedArr = quickSort(arr);

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (binarySearch(sortedArr, -(sortedArr[i] + sortedArr[j])) !== -1) {
        return [sortedArr[i], sortedArr[j], -(sortedArr[i] + sortedArr[j])];
      }
    }
  }

  return [];
};

module.exports = determineSumToZero;
