// ? Naive String Search Approach

const NaiveStringSearch = (long, short) => {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    // ! Outer Loop
    for (let j = 0; j < short.length; j++) {
      // ? Checking if short first element is not equal to first element of long & short
      // ? Breaking the loop
      if (short[j] !== long[i + j]) break;

      // ? Checking current element of short to it's length
      if (j === short.length - 1) count++;
    }
  }
  return count++;
};

const NaiveStringSearch = (str, word) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== str[i + j]) {
        break;
      }
      if (j === word.length - 1) {
        count++;
        console.log('Fount the Match');
      } else {
        console.log('Please try again');
      }
    }
  }
  return count;
};
