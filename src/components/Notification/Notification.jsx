import PropTypes from 'prop-types';
import {Message} from './Notification.styled';

export const Notification = ({ message }) => {
  return message && <Message>{message}</Message>;
};
Notification.propTypes = {
  message: PropTypes.string,
};