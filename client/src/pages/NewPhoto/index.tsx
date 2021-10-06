import { FormEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import usePostMutation from '../../hooks/usePostMutation';

import Button from '../../components/Button';
import DotsLoading from '../../components/DotsLoading';
import Heading from '../../components/Heading';
import Textarea from '../../components/Textarea';

import * as S from './styles';

const NewPhoto = () => {
  const [file, setFile] = useState<File>();
  const [filePreview, setFilePreview] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();
  const postMutation = usePostMutation();

  const notify = () =>
    toast.error('Algo deu errado, por favor tente novamente mais tarde', {
      position: toast.POSITION.BOTTOM_CENTER
    });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setFile(file);
    setFilePreview(fileUrl);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1
  });

  async function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault();

      const data = new FormData();

      data.append('description', description);
      !!file && data.append('photo', file);

      await postMutation.mutateAsync(data);

      history.push('/');
    } catch {
      notify();
    }
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

          <Textarea
            name="description"
            label="Descrição"
            onInputChange={(v) => setDescription(v)}
          />
        </fieldset>

        <Button type="submit">
          {postMutation.isLoading ? <DotsLoading /> : 'Salvar'}
        </Button>
      </form>

      <ToastContainer />
    </S.Wrapper>
  );
};

export default NewPhoto;
