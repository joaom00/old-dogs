import styled from 'styled-components';
import convertPixelToRem from '../../utils/convertPixelToRem';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${convertPixelToRem(24)};
  }
`;

export const Label = styled.label`
  font-size: ${convertPixelToRem(16)};
  color: #6e7191;
  margin-bottom: ${convertPixelToRem(8)};
`;

export const Input = styled.input`
  border: 1px solid #d9dbe9;
  background: none;
  padding: ${convertPixelToRem(16)} ${convertPixelToRem(24)};
  border-radius: 8px;
  font-family: inherit;
  color: #14142b;
  font-size: ${convertPixelToRem(16)};

  &:focus {
    outline: none;
    border-color: #ffbb12;
  }
`;
