import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { InView } from 'react-intersection-observer';

import useCommentMutation from '../../hooks/useCommentMutation';
import usePost from '../../hooks/usePost';
import useComments from '../../hooks/useComments';
import { useModal } from '../../contexts/ModalContext';

import Comment from '../Comment';
import Loading from '../Loading';
import DotsLoading from '../DotsLoading';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

const Modal = () => {
  const [comment, setComment] = useState('');

  const { isOpen, postId, closeModal } = useModal();
  const postQuery = usePost(postId);
  const commentsQuery = useComments(postId);
  const commentMutation = useCommentMutation();

  const notify = () =>
    toast.error('Algo deu errado, por favor tente novamente mais tarde', {
      position: toast.POSITION.BOTTOM_CENTER
    });

  async function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault();

      await commentMutation.mutateAsync({ postId, comment });
      setComment('');
    } catch {
      notify();
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
                    src={postQuery.data.user.avatarUrl || userWithoutImage}
                    alt={`Foto de perfil de ${postQuery.data.user.name}`}
                  />
                </Link>
                <p>{postQuery.data.user.username}</p>
              </S.PostHeader>
              <S.CommentsWrapper>
                {!!postQuery.data.description && (
                  <Comment
                    comment={postQuery.data.description}
                    user={postQuery.data.user}
                    createdAt={postQuery.data.createdAt}
                  />
                )}
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
                <InView
                  onChange={(inView) => inView && commentsQuery.fetchNextPage()}
                />

                {commentsQuery.isFetchingNextPage && <Loading />}
              </S.CommentsWrapper>

              <S.NewCommentInputWrapper>
                <S.NewCommentInput
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Adicionar comentário"
                />
                <S.NewCommentButton type="submit">
                  {commentMutation.isLoading ? <DotsLoading /> : 'Enviar'}
                </S.NewCommentButton>
              </S.NewCommentInputWrapper>
            </S.PostContentWrapper>
          </>
        ) : (
          <Loading fullScreen />
        )}
      </S.Modal>

      <ToastContainer />
    </S.Wrapper>
  );
};

export default Modal;
