const { default: countRating } = require('./countRating');

describe('countRating', () => {
  test('"good" should be 1', () => {
    const initialState = { good: 0, neutral: 0, bad: 0 };
    const action = { type: 'good' };
    const newState = countRating(initialState, action);
    expect(newState.good).toBe(1);
  });

  test('state should be {good: 1, neutral: 1, bad: 2}', () => {
    const initialState = { good: 1, neutral: 1, bad: 1 };
    const action = { type: 'bad' };
    const newState = countRating(initialState, action);
    expect(newState).toEqual({ good: 1, neutral: 1, bad: 2 });
  });

  test('returns the same state for unknown action type', () => {
    const initialState = { good: 0, neutral: 0, bad: 0 };
    const action = { type: 'unknown' };
    const newState = countRating(initialState, action);
    expect(newState).toBe(initialState);
  });
});
