const BubbleSort = arr => {
  let noSwaps = true; // adding noswaps to optimize the code efficiancy
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(BubbleSort([13, 3, 21, 12, 88, 9]));
const status = 0;
