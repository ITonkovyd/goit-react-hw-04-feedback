import { useReducer } from 'react';
import { Container } from './App.styled';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import countTotalFeedback from 'utils/countTotalFeedback/countTotalFeedback';
import countRating from 'utils/countRating/countRating';
import countPositiveFeedbackPercentage from 'utils/countPositiveFeedbackPercentage/countPositiveFeedbackPercentage';

export function App() {
  const [state, dispatch] = useReducer(countRating, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onFeedbackClick={action => dispatch({ type: action })}
        />
      </Section>
      {countTotalFeedback([good, neutral, bad]) > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback([good, neutral, bad])}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              countTotalFeedback([good, neutral, bad])
            )}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
}
