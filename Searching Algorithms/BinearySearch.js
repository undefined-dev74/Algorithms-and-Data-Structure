// const binarySearch = (arr, val) => {
//   const sortedArr = arr.sort((a, b) => a - b);
//   let start = 0;
//   let end = sortedArr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   console.log(middle);

//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);

//     if (arr[middle] === val) {
//       return middle;
//     }
//     return -1;
//   }
// };

// console.log(binarySearch(arr, 91));
const arr = [8, 10, 36, 48, 57, 62, 72, 89, 91, 98];
//            s              m                   e
const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    arr[middle] === elem ? middle : -1;
    console.log(arr[end]);
  }
};

console.log(binarySearch(arr, 72));
