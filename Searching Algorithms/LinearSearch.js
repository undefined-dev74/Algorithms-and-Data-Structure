const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

const arr = [56, 78, 93, 25, 13, 57, 98, 1001];

console.log(linearSearch(arr, 57));
