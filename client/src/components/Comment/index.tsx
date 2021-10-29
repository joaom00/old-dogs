import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash } from 'react-icons/fi'
import { parseISO } from 'date-fns'
import { formatDistanceToNow } from 'date-fns/esm'
import ptBR from 'date-fns/locale/pt-BR'

import { notifyError, notifySuccess } from '../../services/notify'

import { TUser } from '../../contexts/AuthContext'
import { useDeleteCommentMutation } from '../../hooks'

import Dialog from '../Dialog'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

type TCommentProps = {
  commentId?: number
  comment: string
  user: TUser | null
  createdAt: string
}

const Comment = ({ commentId = 1, comment, user, createdAt }: TCommentProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const deleteComment = useDeleteCommentMutation()

  const dateFormatted = formatDistanceToNow(parseISO(createdAt), {
    locale: ptBR
  })

  function handleDeleteComment() {
    deleteComment.mutate(commentId, {
      onSuccess: () => {
        setIsDialogOpen(false)
        notifySuccess('Comentário deletado!')
      },
      onError: () => notifyError()
    })
  }

  return (
    <S.Wrapper>
      {isDialogOpen && <Dialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} onConfirm={handleDeleteComment} />}

      <Link to={`/${user?.username}`}>
        <img
          src={user?.avatarUrl || userWithoutImage}
          alt={user ? `Foto de perfil de ${user.name}` : 'Usuário deletado'}
        />
      </Link>

      <S.ContentWrapper>
        <S.Username to={`/${user?.username}`}>{user ? user.username : 'Usuário deletado'}</S.Username>

        <S.Content>{comment}</S.Content>

        <FiTrash onClick={() => setIsDialogOpen(true)} />
      </S.ContentWrapper>

      <S.CommentDateInfo>{dateFormatted}</S.CommentDateInfo>
    </S.Wrapper>
  )
}

export default Comment
