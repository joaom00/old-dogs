import React, { FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import usePost from '../../hooks/usePost';
import useComments from '../../hooks/useComments';
import useCommentMutation from '../../hooks/useCommentMutation';

import Comment from '../../components/Comment';
import DotsLoading from '../../components/DotsLoading';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

const Post = () => {
  const [comment, setComment] = useState('');

  const { postId } = useParams<{ postId: string }>();
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
    <S.Wrapper>
      <img
        src={postQuery.data?.photoUrl}
        alt={`Foto de ${postQuery.data?.user.name}`}
      />
      <S.PostContentWrapper onSubmit={handleSubmit}>
        <S.PostHeader>
          <Link to={`/${postQuery.data?.user.username}`}>
            <img
              src={postQuery.data?.user.avatarUrl || userWithoutImage}
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

      <ToastContainer />
    </S.Wrapper>
  );
};

export default Post;
