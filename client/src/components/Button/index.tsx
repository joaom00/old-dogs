import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type TButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  fullWidth?: boolean
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = 'primary', size = 'large', fullWidth = false, children, ...props }: TButtonProps) => {
  return (
    <S.Wrapper type="button" variant={variant} size={size} fullWidth={fullWidth} {...props}>
      {children}
    </S.Wrapper>
  )
}

export default Button
