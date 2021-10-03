import { Link } from 'react-router-dom';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';

import { useModal } from '../../contexts/ModalContext';
import { TUser } from '../../contexts/AuthContext';

import * as S from './styles';

export type TPost = {
  id: string;
  description: string;
  createdAt: string;
  totalComments: number;
  totalLikes: number;
  photoUrl: string;
  user: TUser;
};

type PostProps = {
  withLabel?: boolean;
  post: TPost;
};

const Post = ({ post, withLabel = true }: PostProps) => {
  const { openModal } = useModal();

  const isMobileScreen = window.matchMedia('(max-width: 1024px)').matches;

  const formatDate = formatDistanceToNow(parseISO(post.createdAt), {
    locale: ptBR
  });

  if (isMobileScreen) {
    return (
      <S.Wrapper>
        <S.PostImageLink to={`/post/${post.id}`}>
          <img src={post.photoUrl} alt={`Foto de ${post.user?.name}`} />
          {!withLabel && (
            <S.IconsWrapper>
              <S.LikesWrapper>
                <S.Likes>{post.totalLikes}</S.Likes>
                <FiHeart size={24} />
              </S.LikesWrapper>
              <S.CommentsWrapper>
                <S.Comments>{post.totalComments}</S.Comments>
                <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
              </S.CommentsWrapper>
            </S.IconsWrapper>
          )}
        </S.PostImageLink>
        {withLabel && (
          <S.PostInfoWrapper>
            <S.PostInfo>
              <Link to={`/${post.user.username}`}>
                <S.UserImage
                  style={{
                    backgroundImage: `url(${post.user.avatarUrl})`
                  }}
                />
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
                <FiHeart size={24} />
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
  }

  return (
    <S.Wrapper>
      <S.PostImage role="button" onClick={() => openModal(post.id)}>
        <img src={post.photoUrl} alt={`Foto de ${post.user?.name}`} />
        {!withLabel && (
          <S.IconsWrapper>
            <S.LikesWrapper>
              <S.Likes>{post.totalLikes}</S.Likes>
              <FiHeart size={24} />
            </S.LikesWrapper>
            <S.CommentsWrapper>
              <S.Comments>{post.totalComments}</S.Comments>
              <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
            </S.CommentsWrapper>
          </S.IconsWrapper>
        )}
      </S.PostImage>
      {withLabel && (
        <S.PostInfoWrapper>
          <S.PostInfo>
            <Link to={`/${post.user.username}`}>
              <S.UserImage
                style={{
                  backgroundImage: `url(${post.user.avatarUrl})`
                }}
              />
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
              <FiHeart size={24} />
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
