import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type InputProps = {
  label: string;
  passwordInput?: boolean;
  sideBySide?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, label, passwordInput = false, sideBySide = false, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Wrapper sideBySide={sideBySide}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input id={name} name={name} {...rest} showPassword={showPassword} />
        {passwordInput && (
          <S.ShowHidePasswordButton aria-hidden="true" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'esconder' : 'mostrar'}
          </S.ShowHidePasswordButton>
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default Input;
