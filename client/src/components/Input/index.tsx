import { InputHTMLAttributes, ChangeEvent, useState } from 'react';
import * as S from './styles';

export type InputProps = {
  label: string;
  initialValue?: string;
  onInputChange?: (value: string) => void;
  error?: string;
  passwordInput?: boolean;
  sideBySide?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  name,
  label,
  initialValue = '',
  onInputChange,
  error,
  passwordInput = false,
  sideBySide = false,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(initialValue);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  }

  return (
    <S.Wrapper sideBySide={sideBySide}>
      <S.Label htmlFor={name}>
        {label}
        {!!error && <S.Error>{error}</S.Error>}
      </S.Label>
      <S.InputWrapper>
        {passwordInput ? (
          <>
            <S.Input
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              error={!!error}
              passwordInput
              showPassword={showPassword}
              {...rest}
            />
            <S.ShowHidePasswordButton aria-hidden="true" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'esconder' : 'mostrar'}
            </S.ShowHidePasswordButton>
          </>
        ) : (
          <S.Input id={name} name={name} value={value} onChange={onChange} error={!!error} {...rest} />
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default Input;
