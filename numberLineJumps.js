export default function numberLineJumps(x1, v1, x2, v2) {
  let result = 'NO';

  if (v1 <= v2) {
    console.log('Line Number Jumps:', result);
    return result;
  }

  while (x1 <= x2) {
    x1 += v1;
    x2 += v2;

    if (x1 === x2) {
      result = 'YES';
      break;
    }
  }

  console.log('Line Number Jumps:', result);
  return result;
}
