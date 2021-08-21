import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = {
  fullWidth?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ fullWidth = false, children, ...props }: ButtonProps) => {
  return (
    <S.Wrapper fullWidth={fullWidth} type="button" {...props}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
