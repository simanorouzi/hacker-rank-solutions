export default function gradingStudents(grades) {
  let result = [...grades];
  let i = 0;
  grades.forEach((item) => {
    const rounded = Math.ceil(item / 5) * 5;
    if (rounded < 40 || rounded - item >= 3) {
      i++;
      return;
    }
    if (rounded - item < 3) {
      result[i] = rounded;
      i++;
    }
  });
  console.log(result);
}
