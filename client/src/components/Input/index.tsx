import { useState, useRef, useEffect } from 'react'

import * as S from './styles'

export type InputProps = {
  label: string
  initialValue?: string
  onInputChange?: (value: string) => void
  error?: string
  sideBySide?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({
  name,
  label,
  onInputChange,
  error,
  type,
  initialValue = '',
  sideBySide = false,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState(initialValue)
  const inputRef = useRef<HTMLInputElement>(null)

  const isPasswordInput = type === 'password'

  useEffect(() => {
    if (inputRef.current && isPasswordInput) {
      inputRef.current.type = showPassword ? 'text' : 'password'
    }
  }, [showPassword, isPasswordInput])

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper sideBySide={sideBySide}>
      <S.Label htmlFor={name}>
        {label}
        {!!error && <S.Error>{error}</S.Error>}
      </S.Label>
      <S.InputWrapper>
        <S.Input
          id={name}
          name={name}
          type={type}
          ref={inputRef}
          value={value}
          onChange={onChange}
          error={!!error}
          {...rest}
        />
        {isPasswordInput && (
          <S.ShowHidePasswordButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'esconder' : 'mostrar'}
          </S.ShowHidePasswordButton>
        )}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default Input
