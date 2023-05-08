import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onFeedback}) => {
    
    const stateData = Object.keys(options);

    return(
        <>
        {stateData.map(option => (<button type='button' key={option} name={option} onClick={()=> onFeedback(option)}>{option}</button>))} 
        </>
        )
};
    FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onFeedback: PropTypes.func,
  };