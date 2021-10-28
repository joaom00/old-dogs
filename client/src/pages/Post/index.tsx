import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { notifyError } from '../../services/notify'

import { usePost, useComments, useCreateCommentMutation } from '../../hooks'

import Comment from '../../components/Comment'
import CircleLoading from '../../components/CircleLoading'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

const Post = () => {
  const { postId } = useParams<{ postId: string }>()
  const [comment, setComment] = useState('')

  const postQuery = usePost(postId)
  const commentsQuery = useComments(postId)
  const createComment = useCreateCommentMutation()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    createComment.mutate(
      { postId, comment },
      {
        onSuccess: () => setComment(''),
        onError: () => notifyError()
      }
    )
  }

  return (
    <S.Wrapper>
      <img src={postQuery.data?.photoUrl} alt={`Foto de ${postQuery.data?.user.name}`} />
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
                <Comment key={comment.id} comment={comment.comment} user={comment.user} createdAt={comment.createdAt} />
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
            {createComment.isLoading ? <CircleLoading /> : 'Enviar'}
          </S.NewCommentButton>
        </S.NewCommentInputWrapper>
      </S.PostContentWrapper>
    </S.Wrapper>
  )
}

export default Post
