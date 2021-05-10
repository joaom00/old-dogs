import styled from 'styled-components';
import convertPixelToRem from '../../utils/convertPixelToRem';

type ButtonProps = {
  mt?: number;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  background: #ffbb12;
  color: #14142b;
  border-radius: 8px;
  font-size: ${convertPixelToRem(16)};
  font-weight: 700;
  outline: none;
  border: none;
  padding: ${convertPixelToRem(16)} 0;
  transition: filter 0.2s;
  margin-top: ${({ mt }) => (mt ? convertPixelToRem(mt) : '0px')};

  &:hover {
    filter: brightness(0.95);
  }
`;
