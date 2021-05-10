import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.Button type="button" {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
