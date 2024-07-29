export default function countPositiveFeedbackPercentage(good, total) {
  return Math.floor((good * 100) / total);
}
