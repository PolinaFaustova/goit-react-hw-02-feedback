import PropTypes from 'prop-types';

export const Statistics = ( {
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0,}) => {
    return (
      <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
      </>
)
};

    Statistics.prototype = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
 