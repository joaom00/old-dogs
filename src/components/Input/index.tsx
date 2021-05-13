import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} name={name} {...rest} />
    </S.Wrapper>
  );
};

export default Input;
