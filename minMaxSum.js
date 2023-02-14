export default function minMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const minArr = [...sortedArr];
  const maxArr = [...sortedArr];
  maxArr[0] = 0;
  minArr[sortedArr.length - 1] = 0;

  const minSum = minArr.reduce((prevVal, curVal) => prevVal + curVal);
  const maxSum = maxArr.reduce((prevVal, curVal) => prevVal + curVal);

  console.log(minSum, maxSum);
}
