import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';

import { useModal } from '../../contexts/ModalContext';
import api from '../../services/api';

import { TUser } from '../../contexts/AuthContext';
import PostWrapper from './PostWrapper';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

export type TPost = {
  id: string;
  description: string;
  createdAt: string;
  totalComments: number;
  totalLikes: number;
  photoUrl: string;
  user: TUser;
  hasLiked: boolean;
};

type TPostProps = {
  withLabel?: boolean;
  post: TPost;
};

const Post = ({ post, withLabel = true }: TPostProps) => {
  const [hasLiked, setHasLiked] = useState(false);
  const { openModal } = useModal();

  const formatDate = formatDistanceToNow(parseISO(post.createdAt), {
    locale: ptBR
  });

  async function handleLike(postId: string) {
    await api.post(`/posts/${postId}/like`);
    setHasLiked((oldValue) => !oldValue);
  }

  return (
    <S.Wrapper>
      <PostWrapper postId={post.id}>
        <img
          src={post.photoUrl || userWithoutImage}
          alt={`Foto de ${post.user?.name}`}
        />

        {!withLabel && (
          <S.IconsWrapper>
            <S.LikesWrapper>
              <S.Likes>{post.totalLikes}</S.Likes>
              <AiOutlineHeart size={24} />
            </S.LikesWrapper>
            <S.CommentsWrapper>
              <S.Comments>{post.totalComments}</S.Comments>
              <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
            </S.CommentsWrapper>
          </S.IconsWrapper>
        )}
      </PostWrapper>
      {withLabel && (
        <S.PostInfoWrapper>
          <S.PostInfo>
            <Link to={`/${post.user.username}`}>
              <S.UserImage src={post.user.avatarUrl || userWithoutImage} />
            </Link>

            <span>
              <S.Username to={`/${post.user.username}`}>
                {post.user.username}
              </S.Username>
              <S.PostCreatedDate>{formatDate}</S.PostCreatedDate>
            </span>
          </S.PostInfo>

          <S.IconsWrapper>
            <S.LikesWrapper>
              <S.Likes>{post.totalLikes}</S.Likes>
              {post.hasLiked || hasLiked ? (
                <AiFillHeart
                  size={24}
                  color="#C30052"
                  onClick={() => handleLike(post.id)}
                />
              ) : (
                <AiOutlineHeart size={24} onClick={() => handleLike(post.id)} />
              )}
            </S.LikesWrapper>

            <S.CommentsWrapper>
              <S.Comments>{post.totalComments}</S.Comments>
              <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
            </S.CommentsWrapper>
          </S.IconsWrapper>
        </S.PostInfoWrapper>
      )}
    </S.Wrapper>
  );
};

export default Post;
