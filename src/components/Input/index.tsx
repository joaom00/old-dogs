import { ChangeEvent } from 'react';
import * as S from './styles';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  error: string;
  onChange({ target }: ChangeEvent<HTMLInputElement>): void;
  onBlur(): void;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur
}) => {
  return (
    <S.Box>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Box>
  );
};

export default Input;
