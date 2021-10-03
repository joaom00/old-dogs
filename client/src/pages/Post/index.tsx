import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import usePost from '../../hooks/usePost';
import usePostComments from '../../hooks/usePostComments';

import Comment from '../../components/Comment';

import * as S from './styles';

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const postQuery = usePost(postId);
  const commentsQuery = usePostComments(postId);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  return (
    <S.Wrapper>
      <img
        src={postQuery.data?.photoUrl}
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
          <S.PostDescriptions>{postQuery.data?.description}</S.PostDescriptions>

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
          <div ref={loadMoreRef}></div>
        </S.CommentsWrapper>

        <S.NewCommentInputWrapper>
          <S.NewCommentInput placeholder="Adicionar comentário" />
          <S.NewCommentButton>enviar</S.NewCommentButton>
        </S.NewCommentInputWrapper>
      </S.PostContentWrapper>
    </S.Wrapper>
  );
};

export default Post;
