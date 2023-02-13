export default function diagonalDifference(arr) {
  // Write your code here
  const n = arr[0].length;
  var dnllr = 0;
  var dnlrl = 0;
  var item = 0;

  for (var i = 0; i < n; i++) {
    item = arr[i];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        dnllr += item[j];
      }
      if (j === n - 1 - i) {
        dnlrl += item[j];
      }
    }
  }
  return Math.abs(dnlrl - dnllr);
}
