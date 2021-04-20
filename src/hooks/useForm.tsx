import { ChangeEvent, useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  }
};

interface TypesProps {
  email: {
    regex: RegExp;
    message: string;
  };
}

const useForm = (type?: keyof TypesProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value: string) => {
    if (!type) return;
    if (!value.length) {
      setError('Preencha um valor');
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false
    } else {
      setError('');
    }
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
