import { FiHeart, FiMessageCircle } from 'react-icons/fi';

import * as S from './styles';

import { Post as LatestPost } from '../../hooks/usePosts';

type PostProps = {
  handleOpenModal: (postId: string) => void;
  post: LatestPost;
};

const Post = ({ post, handleOpenModal }: PostProps) => {
  return (
    <S.Wrapper>
      <S.PostImage>
        <img
          src={post.photoUrl}
          alt={`Foto de ${post.user.name}`}
          role="button"
          onClick={() => handleOpenModal(post.id)}
        />
      </S.PostImage>
      <S.PostInfoWrapper>
        <S.PostInfo>
          <S.UserImage
            style={{
              backgroundImage: `url(${post.user.avatarUrl})`
            }}
          />
          <span>
            <p>{post.user.username}</p>
            <p>2 hrs ago</p>
          </span>
        </S.PostInfo>
        <S.Icons>
          <S.Likes>
            <S.TotalLikes>{post.totalLikes}</S.TotalLikes>
            <FiHeart size={24} />
          </S.Likes>
          <S.Comments>
            <S.TotalComments>{post.totalComments + post.totalReplys}</S.TotalComments>
            <FiMessageCircle size={24} onClick={() => handleOpenModal(post.id)} />
          </S.Comments>
        </S.Icons>
      </S.PostInfoWrapper>
    </S.Wrapper>
  );
};

export default Post;
