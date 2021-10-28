import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMessageCircle } from 'react-icons/fi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { parseISO } from 'date-fns'
import { formatDistanceToNow } from 'date-fns/esm'
import ptBR from 'date-fns/locale/pt-BR'

import api from '../../services/api'

import { useModal } from '../../contexts/ModalContext'
import { TUser } from '../../contexts/AuthContext'

import PostWrapper from './PostWrapper'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

export type TPost = {
  id: string
  description: string
  totalComments: number
  totalLikes: number
  photoUrl: string
  user: TUser
  hasLiked: boolean
  createdAt: string
}

type TPostProps = {
  withLabel?: boolean
} & TPost

const Post = ({ id, photoUrl, totalComments, totalLikes, hasLiked, user, createdAt, withLabel = true }: TPostProps) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(totalLikes)
  const { openModal } = useModal()

  const formatDate = formatDistanceToNow(parseISO(createdAt), {
    locale: ptBR
  })

  async function handleLike(postId: string) {
    await api.post(`/posts/${postId}/like`)
    setLikes((oldLikes) => (liked ? oldLikes - 1 : oldLikes + 1))
    setLiked((oldValue) => !oldValue)
  }

  return (
    <S.Wrapper>
      <PostWrapper postId={id}>
        <S.ImageWrapper>
          <img src={photoUrl || userWithoutImage} alt={`Foto de ${user?.name}`} />
        </S.ImageWrapper>

        {!withLabel && (
          <S.IconsWrapper>
            <S.LikesWrapper>
              <S.Likes>{likes}</S.Likes>
              <AiOutlineHeart size={24} />
            </S.LikesWrapper>
            <S.CommentsWrapper>
              <S.Comments>{totalComments}</S.Comments>
              <FiMessageCircle size={24} onClick={() => openModal(id)} />
            </S.CommentsWrapper>
          </S.IconsWrapper>
        )}
      </PostWrapper>
      {withLabel && (
        <S.PostInfoWrapper>
          <S.PostInfo>
            <Link to={`/${user.username}`}>
              <S.UserImage src={user.avatarUrl || userWithoutImage} />
            </Link>

            <span>
              <S.Username to={`/${user.username}`}>{user.username}</S.Username>
              <S.PostCreatedDate>{formatDate}</S.PostCreatedDate>
            </span>
          </S.PostInfo>

          <S.IconsWrapper>
            <S.LikesWrapper>
              <S.Likes>{likes}</S.Likes>
              {hasLiked || hasLiked ? (
                <AiFillHeart size={24} color="#C30052" onClick={() => handleLike(id)} />
              ) : (
                <AiOutlineHeart size={24} onClick={() => handleLike(id)} />
              )}
            </S.LikesWrapper>

            <S.CommentsWrapper>
              <S.Comments>{totalComments}</S.Comments>
              <FiMessageCircle size={24} onClick={() => openModal(id)} />
            </S.CommentsWrapper>
          </S.IconsWrapper>
        </S.PostInfoWrapper>
      )}
    </S.Wrapper>
  )
}

export default Post
