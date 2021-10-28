import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { notifyError } from '../../services/notify'
import api from '../../services/api'
import { TFieldErros, signUpValidate } from '../../utils/validations'

import Button from '../../components/Button'
import Input from '../../components/Input'

import * as S from './styles'

const SignUpForm = () => {
  const [fieldError, setFieldError] = useState<TFieldErros>({})
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  })

  const history = useHistory()

  function handleInput(field: string, value: string) {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    try {
      event.preventDefault()

      setFieldError({})

      const errors = signUpValidate(values)

      if (Object.keys(errors).length) {
        setFieldError(errors)
        return
      }

      setFieldError({})

      await api.post('users', values)

      history.push('/signin')
    } catch (err) {
      notifyError(err.response.data.message)
    }
  }

  return (
    <S.Wrapper>
      <S.SignUpFormWrapper>
        <S.LinkToSignInPage to="/signin">
          <FiArrowLeft /> Voltar para a página de login
        </S.LinkToSignInPage>
        <S.SignUpForm onSubmit={handleSubmit}>
          <fieldset>
            <S.Title>Cadastre-se</S.Title>
            <S.Description>Crie uma conta gratuitamente!</S.Description>
            <Input
              type="text"
              name="username"
              label="Nome de Usuário"
              onInputChange={(value) => handleInput('username', value)}
              error={fieldError.username}
            />
            <Input
              type="email"
              name="email"
              label="E-mail"
              onInputChange={(value) => handleInput('email', value)}
              error={fieldError.email}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              onInputChange={(value) => handleInput('password', value)}
              error={fieldError.password}
            />
          </fieldset>

          <Button fullWidth type="submit">
            Criar conta
          </Button>
        </S.SignUpForm>
      </S.SignUpFormWrapper>
      <S.Background />
    </S.Wrapper>
  )
}

export default SignUpForm
