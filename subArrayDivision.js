export default function subArrayDivision(array, day, month) {
  let lengthSet = month;
  if (month > 1) {
    lengthSet = month - 1;
    d:3
    m:2
    l:5
    ls:1
  }
  let countSet = 0;

  for (let i = 0; i <= array.length - month; i++) {
    let sum = 0;
    for (let j = i+1; j <= lengthSet; j++) {
      sum = sum + array[j];
    }
    if (sum === day) {
      countSet++;
    }
  }
  console.log(array);
  console.log(countSet);
}
