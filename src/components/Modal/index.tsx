import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import Comment from '../Comment';

import usePost from '../../hooks/usePost';
import usePostComments from '../../hooks/usePostComments';

import * as S from './styles';

type ModalProps = {
  postId: string;
  isOpen: boolean;
  handleOpenModal: (value: boolean) => void;
};

const Modal = ({ postId, handleOpenModal, isOpen }: ModalProps) => {
  const { data: postData } = usePost(postId);
  const { data: comments } = usePostComments(postId);

  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="modal" isOpen={isOpen}>
      <S.Close role="button" aria-label="fechar modal" onClick={() => handleOpenModal(false)}>
        <FiX size={32} />
      </S.Close>
      <S.Modal>
        <img src={postData?.photoUrl} width="600px" height="600px" alt={`Foto de ${postData?.user.name}`} />
        <S.PostContentWrapper>
          <S.PostHeader>
            <Link to="/">
              <img src={postData?.user.avatarUrl} alt={`Foto de perfil de ${postData?.user.name}`} />
            </Link>
            <p>{postData?.user.username}</p>
          </S.PostHeader>
          <S.CommentsWrapper>
            <S.PostDescriptions>{postData?.description}</S.PostDescriptions>

            {comments?.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </S.CommentsWrapper>

          <S.NewCommentInputWrapper>
            <S.NewCommentInput placeholder="Adicionar comentário" />
            <S.NewCommentButton>enviar</S.NewCommentButton>
          </S.NewCommentInputWrapper>
        </S.PostContentWrapper>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Modal;
