import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <S.Box>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} {...rest} />
    </S.Box>
  );
};

export default Input;
