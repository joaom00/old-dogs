import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX, FiTrash } from 'react-icons/fi'
import { InView } from 'react-intersection-observer'
import { parseISO } from 'date-fns'
import { formatDistanceToNow } from 'date-fns/esm'
import ptBR from 'date-fns/locale/pt-BR'

import { notifyError } from '../../services/notify'

import { useComments, useCreateCommentMutation, usePost, useDeletePostMutation, useGetUserLogged } from '../../hooks'
import { useModal } from '../../contexts/ModalContext'

import Comment from '../Comment'
import Loading from '../Loading'
import CircleLoading from '../CircleLoading'
import Dialog from '../Dialog'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

const Modal = () => {
  const [comment, setComment] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const userLogged = useGetUserLogged()

  const { isOpen, postId, closeModal } = useModal()
  const postQuery = usePost(postId)
  const commentsQuery = useComments(postId)
  const createComment = useCreateCommentMutation()
  const deletePost = useDeletePostMutation()

  function handleDate(createdAt: string) {
    return formatDistanceToNow(parseISO(createdAt), {
      locale: ptBR
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    createComment.mutate(
      { postId, comment },
      {
        onSuccess: () => setComment(''),
        onError: () => notifyError()
      }
    )
  }

  function handleDeletePost() {
    deletePost.mutate(postId, {
      onSuccess: () => {
        closeModal()
        setIsDialogOpen(false)
      },
      onError: (error) => notifyError(error.response?.data.message)
    })
  }

  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="modal" isOpen={isOpen}>
      {isDialogOpen && <Dialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} onConfirm={handleDeletePost} />}

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

                {postQuery.data.user.username === userLogged?.username && (
                  <S.TrashIconWrapper onClick={() => setIsDialogOpen(true)}>
                    <FiTrash />
                  </S.TrashIconWrapper>
                )}
              </S.PostHeader>

              <S.CommentsWrapper>
                {!!postQuery.data.description && (
                  <S.DescriptionWrapper>
                    <Link to={`/${postQuery.data.user.username}`}>
                      <img src={postQuery.data.user.avatarUrl ?? userWithoutImage} />
                    </Link>

                    <S.Description>
                      <Link to={`${postQuery.data.user.username}`}>{postQuery.data.user.username}</Link>

                      <p>{postQuery.data.description}</p>
                    </S.Description>

                    <S.DescriptionDateInfo>{handleDate(postQuery.data.createdAt)}</S.DescriptionDateInfo>
                  </S.DescriptionWrapper>
                )}

                {commentsQuery.data?.pages.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.comments.map((comment) => (
                      <Comment
                        key={comment.id}
                        comment={comment.comment}
                        user={comment.user}
                        commentId={comment.id}
                        createdAt={comment.createdAt}
                      />
                    ))}
                  </React.Fragment>
                ))}

                <InView onChange={(inView) => inView && commentsQuery.fetchNextPage()} />

                {commentsQuery.isFetchingNextPage && <Loading />}
              </S.CommentsWrapper>

              <S.NewCommentInputWrapper>
                <S.NewCommentInput
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Adicionar comentário"
                />

                <S.NewCommentButton type="submit" disabled={!comment}>
                  {createComment.isLoading ? <CircleLoading /> : 'Enviar'}
                </S.NewCommentButton>
              </S.NewCommentInputWrapper>
            </S.PostContentWrapper>
          </>
        ) : (
          <Loading fullScreen />
        )}
      </S.Modal>
    </S.Wrapper>
  )
}

export default Modal
