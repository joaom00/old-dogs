import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import Button from '../../components/Button'
import Input from '../../components/Input'

import * as S from './styles'

const ForgotPassword = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    await api.post('forgot-password', {
      email
    })

    history.push('/signin')
  }

  return (
    <S.Wrapper>
      <S.ForgotPasswordFormWrapper>
        <S.LinkToSignInPage to="/signin">
          <FiArrowLeft /> Voltar para a página de login
        </S.LinkToSignInPage>
        <S.ForgotPasswordForm onSubmit={handleSubmit}>
          <fieldset>
            <S.Title>Recuperação de Senha</S.Title>
            <S.Description>Preencha o campo para iniciar o processo de recuperação de senha.</S.Description>
            <Input
              type="email"
              name="email"
              label="E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </fieldset>

          <Button fullWidth type="submit">
            Enviar email
          </Button>
        </S.ForgotPasswordForm>
      </S.ForgotPasswordFormWrapper>
      <S.Background />
    </S.Wrapper>
  )
}

export default ForgotPassword
