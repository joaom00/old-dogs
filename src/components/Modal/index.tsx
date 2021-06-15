import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import Comment from '../Comment';

import usePost from '../../hooks/usePost';
import usePostComments from '../../hooks/usePostComments';
import useModal from '../../hooks/useModal';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import * as S from './styles';

const Modal = () => {
  const { isOpen, postId, closeModal } = useModal();
  const postQuery = usePost(postId);
  const commentsQuery = usePostComments(postId);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: commentsQuery.fetchNextPage,
    enabled: commentsQuery.hasNextPage
  });

  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="modal" isOpen={isOpen}>
      <S.Close role="button" aria-label="fechar modal" onClick={closeModal}>
        <FiX size={32} />
      </S.Close>
      <S.Modal>
        <img
          src={postQuery.data?.photoUrl}
          width="600px"
          height="600px"
          alt={`Foto de ${postQuery.data?.user.name}`}
        />
        <S.PostContentWrapper>
          <S.PostHeader>
            <Link to={`/${postQuery.data?.user.username}`}>
              <img
                src={postQuery.data?.user.avatarUrl}
                alt={`Foto de perfil de ${postQuery.data?.user.name}`}
              />
            </Link>
            <p>{postQuery.data?.user.username}</p>
          </S.PostHeader>
          <S.CommentsWrapper>
            <S.PostDescriptions>
              {postQuery.data?.description}
            </S.PostDescriptions>

            {commentsQuery.data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </React.Fragment>
            ))}
            <div ref={loadMoreRef}></div>
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
