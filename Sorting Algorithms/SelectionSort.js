// ? SelectionSort Algorithm

const SelectionSort = arr => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
};

console.log(SelectionSort([8, 9, 55, 11, 7]));
