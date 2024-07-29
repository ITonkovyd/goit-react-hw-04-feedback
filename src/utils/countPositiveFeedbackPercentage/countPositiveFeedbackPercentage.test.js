const {
  default: countPositiveFeedbackPercentage,
} = require('./countPositiveFeedbackPercentage');

describe('countPositiveFeedbackPercentage', () => {
  test('should be 50%', () => {
    const good = 10;
    const total = 20;
    const result = countPositiveFeedbackPercentage(good, total);
    expect(result).toBe(50);
  });

  test('should be 33', () => {
    const good = 33;
    const total = 100;
    const result = countPositiveFeedbackPercentage(good, total);
    expect(result).toBe(33);
  });
});
