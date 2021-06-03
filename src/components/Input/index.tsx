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
        {passwordInput ? (
          <>
            <S.Input id={name} name={name} {...rest} passwordInput showPassword={showPassword} />
            <S.ShowHidePasswordButton aria-hidden="true" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'esconder' : 'mostrar'}
            </S.ShowHidePasswordButton>
          </>
        ) : (
          <S.Input id={name} name={name} {...rest} />
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default Input;
