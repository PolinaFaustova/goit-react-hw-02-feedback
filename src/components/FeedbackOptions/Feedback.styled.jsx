import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const Button = styled.button`
  background-color: #FFFFFF;
  color: #964B00;
  border: 2px solid #964B00;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #964B00;
    color: #FFFFFF;
  }
`;