function between2Sets(arrA, arrB) {
  let resultArr = [];
  let count = 0;
  const minVal = arrA.sort((a, b) => a - b)[arrA.length - 1];
  const maxVal = arrB.sort((a, b) => a - b)[0];
  console.log(minVal, maxVal);
  for (let i = minVal; i <= maxVal; i++) {
    if (
      arrA.every((item) => i % item === 0) &&
      arrB.every((item) => item % i === 0)
    ) {
      resultArr.push(i);
      count++;
    }
  }
  console.log('Between Two Sets:', resultArr, count);
}

export default between2Sets;
