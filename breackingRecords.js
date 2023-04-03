export default function breackingRecords(scores) {
  let highestScores = [];
  let lowestScores = [];
  lowestScores[0] = highestScores[0] = scores[0];
  let recordsCount = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScores[i - 1]) highestScores[i] = scores[i];
    else highestScores[i] = highestScores[i - 1];

    if (scores[i] < lowestScores[i - 1]) lowestScores[i] = scores[i];
    else lowestScores[i] = lowestScores[i - 1];
  }

  for (let i = 0; i < scores.length - 1; i++) {
    if (highestScores[i] !== highestScores[i + 1]) recordsCount[0]++;
    if (lowestScores[i] !== lowestScores[i + 1]) recordsCount[1]++;
  }

  console.log(recordsCount);
}
