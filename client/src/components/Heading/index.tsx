import {} from 'react'
import * as S from './styles'

type THeadingProps = {
  label?: string
  children: React.ReactNode
  as?: React.ElementType
}

const Heading = ({ children, label, ...props }: THeadingProps) => {
  return (
    <S.Wrapper {...props}>
      {children}

      {!!label && <span>{label}</span>}
    </S.Wrapper>
  )
}

export default Heading
