export default function maxCountCandles(arr) {
  const maxNumber = Math.max(...arr);
  const count = arr.filter((number) => number === maxNumber).length;
  console.log('There are', count, 'Count from maximum Number');
}
