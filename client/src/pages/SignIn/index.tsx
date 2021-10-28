import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { notifyError } from '../../services/notify'

import { useAuth } from '../../contexts/AuthContext'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import CircleLoading from '../../components/CircleLoading'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

const SignInForm = () => {
  const { signIn } = useAuth()
  const history = useHistory()

  const [values, setValues] = useState({ emailOrUsername: '', password: '' })

  function handleInput(field: string, value: string) {
    setValues((oldValue) => ({ ...oldValue, [field]: value }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    signIn.mutate(values, {
      onSuccess: () => history.push('/'),
      onError: (error) => notifyError(error.response?.data.message)
    })
  }

  return (
    <S.Wrapper>
      <S.SignInFormWrapper>
        <Logo color="yellow" size="large">
          Dogs
        </Logo>
        <S.SignInForm onSubmit={handleSubmit}>
          <fieldset>
            <S.Title>Iniciar sessão</S.Title>
            <S.Description>Já possui uma conta? Faça login aqui embaixo.</S.Description>
            <Input
              type="text"
              name="emailOrUsername"
              label="E-mail ou Nome de usuário"
              onInputChange={(value) => handleInput('emailOrUsername', value)}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              onInputChange={(value) => handleInput('password', value)}
            />
          </fieldset>

          <Button fullWidth type="submit">
            {signIn.isLoading ? <CircleLoading /> : 'Entrar'}
          </Button>

          <S.LinksWrapper>
            <p>
              Não tem conta? <S.SignUpLink to="/signup">Crie uma</S.SignUpLink>
            </p>
            <S.ForgotPasswordLink to="/forgot-password">Esqueci minha senha</S.ForgotPasswordLink>
          </S.LinksWrapper>
        </S.SignInForm>
      </S.SignInFormWrapper>
      <S.Background />
    </S.Wrapper>
  )
}

export default SignInForm
