import PropTypes from 'prop-types';
import {
  FeedbackButton,
  FeedbackElement,
  FeedbackList,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedbackClick, dispatch }) => (
  <FeedbackList>
    {options.map((option, index) => (
      <FeedbackElement key={index}>
        <FeedbackButton
          type="button"
          onClick={() => onFeedbackClick(option, dispatch)}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </FeedbackButton>
      </FeedbackElement>
    ))}
  </FeedbackList>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
};
