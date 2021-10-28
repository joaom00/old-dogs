import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { notifyError, notifySuccess } from '../../services/notify'

import { useGetUserLogged, useCreatePostMutation } from '../../hooks'

import Button from '../../components/Button'
import CircleLoading from '../../components/CircleLoading'
import Heading from '../../components/Heading'
import Textarea from '../../components/Textarea'

import * as S from './styles'

const NewPhoto = () => {
  const [file, setFile] = useState<File>()
  const [filePreview, setFilePreview] = useState('')
  const [description, setDescription] = useState('')

  const user = useGetUserLogged()

  const history = useHistory()
  const createPost = useCreatePostMutation()

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)

    setFile(file)
    setFilePreview(fileUrl)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1
  })

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const data = new FormData()
    data.append('description', description)
    !!file && data.append('photo', file)

    createPost.mutate(data, {
      onSuccess: () => {
        history.push(`/${user?.username}`)
        notifySuccess('Publicação criada!')
      },
      onError: () => notifyError()
    })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Heading as="legend">Postar uma foto</Heading>

          <S.Dropzone {...getRootProps()} hasFile={!!file}>
            <input {...getInputProps()} accept="image/*" />
            {file ? (
              <img src={filePreview} alt="Foto" />
            ) : (
              <S.Description>
                <FiUpload size={24} />
                Arraste uma imagem ou clique para selecionar
              </S.Description>
            )}
          </S.Dropzone>

          <Textarea name="description" label="Descrição" onInputChange={(v) => setDescription(v)} />
        </fieldset>

        <Button type="submit">{createPost.isLoading ? <CircleLoading /> : 'Salvar'}</Button>
      </form>
    </S.Wrapper>
  )
}

export default NewPhoto
