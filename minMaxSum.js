export default function minMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let number = sortedArr[0];

  sortedArr[0] = 0;
  const maxSum = sortedArr.reduce((prevVal, curVal) => prevVal + curVal);
  sortedArr[0] = number;
  number = sortedArr[sortedArr.length - 1];
  sortedArr[sortedArr.length - 1] = 0;
  const minSum = sortedArr.reduce((prevVal, curVal) => prevVal + curVal);

  console.log(minSum, maxSum);
}
