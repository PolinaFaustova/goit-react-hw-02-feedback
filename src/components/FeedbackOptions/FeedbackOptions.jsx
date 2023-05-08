import PropTypes from 'prop-types';
import {ButtonWrapper, Button} from './Feedback.styled';

export const FeedbackOptions = ({options, onFeedback}) => {
    
    const stateData = Object.keys(options);

    return(
        <ButtonWrapper>
        {stateData.map(option => (<Button type='button' key={option} name={option} onClick={()=> onFeedback(option)}>{option}</Button>))} 
        </ButtonWrapper>
        )
};
    FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onFeedback: PropTypes.func,
  };