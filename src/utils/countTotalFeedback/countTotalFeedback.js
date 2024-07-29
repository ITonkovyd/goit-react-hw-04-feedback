export default function countTotalFeedback(feedback) {
  return feedback.reduce((acc, el) => el + acc, 0);
}
