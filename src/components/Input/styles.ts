import styled from 'styled-components';
import convertPixelToRem from '../../utils/convertPixelToRem';

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${convertPixelToRem(32)};
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

  &:focus {
    border: 1px solid #ffbb12;
  }
`;
