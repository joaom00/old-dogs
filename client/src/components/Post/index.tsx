import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

import { TPost } from '../../hooks/usePosts';

import useModal from '../../hooks/useModal';

import * as S from './styles';

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

  return (
    <S.Wrapper>
      {isMobileScreen ? (
        <S.PostImageLink to={`/post/${post.id}`}>
          <img
            src={post.photoUrl}
            alt={`Foto de ${post.user?.name}`}
            role="button"
          />
          {!withLabel && (
            <S.Icons>
              <S.Likes>
                <S.TotalLikes>{post.totalLikes}</S.TotalLikes>
                <FiHeart size={24} />
              </S.Likes>
              <S.Comments>
                <S.TotalComments>
                  {post.totalComments + post.totalReplies}
                </S.TotalComments>
                <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
              </S.Comments>
            </S.Icons>
          )}
        </S.PostImageLink>
      ) : (
        <S.PostImage onClick={() => openModal(post.id)}>
          <img
            src={post.photoUrl}
            alt={`Foto de ${post.user?.name}`}
            role="button"
          />
          {!withLabel && (
            <S.Icons>
              <S.Likes>
                <S.TotalLikes>{post.totalLikes}</S.TotalLikes>
                <FiHeart size={24} />
              </S.Likes>
              <S.Comments>
                <S.TotalComments>
                  {post.totalComments + post.totalReplies}
                </S.TotalComments>
                <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
              </S.Comments>
            </S.Icons>
          )}
        </S.PostImage>
      )}
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
          <S.Icons>
            <S.Likes>
              <S.TotalLikes>{post.totalLikes}</S.TotalLikes>
              <FiHeart size={24} />
            </S.Likes>
            <S.Comments>
              <S.TotalComments>
                {post.totalComments + post.totalReplies}
              </S.TotalComments>
              <FiMessageCircle size={24} onClick={() => openModal(post.id)} />
            </S.Comments>
          </S.Icons>
        </S.PostInfoWrapper>
      )}
    </S.Wrapper>
  );
};

export default Post;
