import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <S.Button type="button" {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
