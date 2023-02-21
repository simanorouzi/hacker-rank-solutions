export default function timeConversion(input) {
  const timeConverted = input.split(':');
  let hour = parseInt(timeConverted[0]);

  if (timeConverted[2].includes('AM')) {
    if (hour === 12) {
      timeConverted[0] = 0;
    }
    if (hour < 12) {
      timeConverted[0] = hour;
    }
  } else {
    if (hour !== 12) timeConverted[0] = hour + 12;
  }

  if (timeConverted[0] >= 0 && timeConverted[0] < 10) {
    timeConverted[0] = '0' + timeConverted[0].toString();
  }
  timeConverted[2] = timeConverted[2].replace('AM', '').replace('PM', '');
  console.log(timeConverted.join(':'));
}
