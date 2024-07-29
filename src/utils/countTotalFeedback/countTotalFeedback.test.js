const { default: countTotalFeedback } = require('./countTotalFeedback');

describe('countTotalFeedback function', () => {
  test('should be 4 for the [1, 1, 2]', () => {
    const param = [1, 1, 2];
    const result = countTotalFeedback(param);
    expect(result).toBe(4);
  });

  test('should be 0 for the [0,0,0]', () => {
    const param = [0, 0, 0];
    const result = countTotalFeedback(param);
    expect(result).toBe(0);
  });

  test('should be 0 when feedbacks array is empty', () => {
    const feedbacks = [];
    const result = countTotalFeedback(feedbacks);
    expect(result).toBe(0);
  });
});
