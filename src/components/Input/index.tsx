import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} name={name} {...rest} />
    </S.Wrapper>
  );
};

export default Input;
