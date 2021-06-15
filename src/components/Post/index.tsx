import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

import useModal from '../../hooks/useModal';
import { Post as LatestPosts } from '../../hooks/usePosts';

import * as S from './styles';

type PostProps = {
  post: LatestPosts;
};

const Post = ({ post }: PostProps) => {
  const { openModal } = useModal();

  const formatDate = formatDistanceToNow(parseISO(post.createdAt), {
    locale: ptBR
  });

  return (
    <S.Wrapper>
      <S.PostImage onClick={() => openModal(post.id)}>
        <img
          src={post.photoUrl}
          alt={`Foto de ${post.user.name}`}
          role="button"
        />
      </S.PostImage>
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
    </S.Wrapper>
  );
};

export default Post;
