// ? factorial Number with Recursive function

const factorialNum = (num) => {
  if (num === 1) return 1;

  return num * factorialNum(num - 1);
};

console.log(factorialNum(5));
