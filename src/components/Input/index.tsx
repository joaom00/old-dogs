import * as S from './styles';

interface InputProps {
  label: string;
  type: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, type, name }) => {
  return (
    <S.Box>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} name={name} type={type} />
      <S.ErrorMessage>Error</S.ErrorMessage>
    </S.Box>
  );
};

export default Input;
