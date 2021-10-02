import React, { FormEvent, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Comment from '../Comment';

import useCreateComment from '../../hooks/useCreateComment';
import usePost from '../../hooks/usePost';
import usePostComments from '../../hooks/usePostComments';
import { useModal } from '../../contexts/ModalContext';

import * as S from './styles';

const Modal = () => {
  const { isOpen, postId, closeModal } = useModal();
  const [comment, setComment] = useState('');

  const postQuery = usePost(postId);
  const commentsQuery = usePostComments(postId);

  const createCommentQuery = useCreateComment();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (comment) {
      createCommentQuery.mutate({ postId, comment });
      setComment('');
    }
  }

  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="modal" isOpen={isOpen}>
      <S.Close role="button" aria-label="fechar modal" onClick={closeModal}>
        <FiX size={32} />
      </S.Close>
      <S.Modal>
        {postQuery.isSuccess ? (
          <>
            <img
              src={postQuery.data.photoUrl}
              width="600px"
              height="600px"
              alt={`Foto de ${postQuery.data.user.name}`}
            />
            <S.PostContentWrapper onSubmit={handleSubmit}>
              <S.PostHeader>
                <Link to={`/${postQuery.data.user.username}`}>
                  <img
                    src={postQuery.data.user.avatarUrl}
                    alt={`Foto de perfil de ${postQuery.data.user.name}`}
                  />
                </Link>
                <p>{postQuery.data.user.username}</p>
              </S.PostHeader>
              <S.CommentsWrapper>
                <Comment
                  comment={postQuery.data.description}
                  user={postQuery.data.user}
                  createdAt={postQuery.data.createdAt}
                />
                {commentsQuery.data?.pages.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.comments.map((comment) => (
                      <Comment
                        key={comment.id}
                        comment={comment.comment}
                        user={comment.user}
                        createdAt={comment.createdAt}
                      />
                    ))}
                  </React.Fragment>
                ))}
                <button
                  type="button"
                  onClick={() => commentsQuery.fetchNextPage()}
                >
                  Carregar mais
                </button>
              </S.CommentsWrapper>

              <S.NewCommentInputWrapper>
                <S.NewCommentInput
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Adicionar comentário"
                />
                <S.NewCommentButton>
                  {createCommentQuery.isLoading ? 'Enviando...' : 'Enviar'}
                </S.NewCommentButton>
              </S.NewCommentInputWrapper>
            </S.PostContentWrapper>
          </>
        ) : (
          <div>Carregando...</div>
        )}
      </S.Modal>
    </S.Wrapper>
  );
};

export default Modal;
