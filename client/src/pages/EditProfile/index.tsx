import React, { useState } from 'react'

import { notifyError, notifySuccess } from '../../services/notify'
import { editProfileValidate, TFieldErros } from '../../utils/validations'

import { TUser } from '../../contexts/AuthContext'
import { TUpdateUserData, useGetUserLogged, useUpdateAvatarMutation, useUpdateUserMutation } from '../../hooks'

import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Input from '../../components/Input'
import CircleLoading from '../../components/CircleLoading'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

const EditProfile = () => {
  const user = useGetUserLogged()

  const [fieldError, setFieldError] = useState<TFieldErros>({})
  const [file, setFile] = useState<File>()
  const [filePreview, setFilePreview] = useState('')
  const [values, setValues] = useState<TUpdateUserData>(() => {
    if (user) {
      return {
        username: user.username,
        email: user.email,
        name: user.name || ''
      }
    }

    return {} as TUser
  })

  const updateUser = useUpdateUserMutation()
  const updateAvatar = useUpdateAvatarMutation()

  function handleInput(field: string, value: string) {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setFieldError({})

    const errors = editProfileValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    updateUser.mutate(values, {
      onSuccess: () => notifySuccess('Perfil atualizado!'),
      onError: (error) => notifyError(error.response?.data.message)
    })

    if (file) {
      const data = new FormData()
      data.append('avatar', file)

      updateAvatar.mutate(data, {
        onError: () => notifyError()
      })
    }
  }

  function fileHandle(event: React.ChangeEvent<HTMLInputElement>) {
    let file
    if (event.target.files) file = event.target.files[0]

    const fileUrl = URL.createObjectURL(file)
    setFile(file)
    setFilePreview(fileUrl)
  }

  return (
    <S.Wrapper>
      <S.UserDataForm onSubmit={handleSubmit}>
        <S.UserImageWrapper role="button">
          <label htmlFor="avatar">
            <img src={filePreview || user?.avatarUrl || userWithoutImage} />
          </label>
          <input type="file" id="avatar" name="avatar" onChange={fileHandle} />
        </S.UserImageWrapper>

        <fieldset>
          <Heading as="legend">Seus dados</Heading>
          <Input
            initialValue={user?.username}
            type="text"
            name="username"
            label="Nome de usuário"
            sideBySide
            onInputChange={(value) => handleInput('username', value)}
            error={fieldError.username}
          />
          <Input
            initialValue={user?.email}
            type="text"
            name="email"
            label="E-mail"
            sideBySide
            onInputChange={(value) => handleInput('email', value)}
            error={fieldError.email}
          />
          <Input
            initialValue={user?.name || ''}
            type="text"
            name="name"
            label="Nome"
            sideBySide
            onInputChange={(value) => handleInput('name', value)}
            error={fieldError.name}
          />
        </fieldset>

        <fieldset>
          <Heading as="legend">Trocar senha</Heading>
          <Input
            type="password"
            name="oldPassword"
            label="Senha atual"
            sideBySide
            onInputChange={(value) => handleInput('oldPassword', value)}
            error={fieldError.oldPassword}
          />
          <Input
            type="password"
            name="newPassword"
            label="Nova senha"
            sideBySide
            onInputChange={(value) => handleInput('password', value)}
            error={fieldError.password}
          />
        </fieldset>

        <Button type="submit">{updateUser.isLoading ? <CircleLoading /> : 'Salvar'}</Button>
      </S.UserDataForm>
    </S.Wrapper>
  )
}

export default EditProfile
