import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mt?: number;
};

const Button: React.FC<ButtonProps> = ({ mt, children, ...props }) => {
  return (
    <S.Button mt={mt} type="button" {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
