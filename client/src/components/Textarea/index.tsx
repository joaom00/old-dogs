import React, { ChangeEvent, TextareaHTMLAttributes, useState } from 'react';

import * as S from './styles';

type TextareaProps = {
  name: string;
  label: string;
  onInputChange?: (value: string) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ name, label, onInputChange, ...props }: TextareaProps) => {
  const [value, setValue] = useState('');

  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.TextArea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </S.Wrapper>
  );
};

export default Textarea;
