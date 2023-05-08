import PropTypes from 'prop-types';
import {DescriptionWrapper, Description} from './Statistics.styled';

export const Statistics = ( {
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0,}) => {
    return (
      <DescriptionWrapper>
      <Description>Good: {good}</Description>
      <Description>Neutral: {neutral}</Description>
      <Description>Bad: {bad}</Description>
      <Description>Total: {total}</Description>
      <Description>Positive feedback: {positivePercentage}%</Description>
      </DescriptionWrapper>
)
};

    Statistics.prototype = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
 