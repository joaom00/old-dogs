import * as S from './styles';

type TPostWrapperProps = {
  postId: string;
  children: React.ReactNode;
};

const PostWrapper = ({ postId, children }: TPostWrapperProps) => {
  const isMobileScreen = window.matchMedia('(max-width: 1024px)').matches;

  return isMobileScreen ? (
    <S.PostImageLink to={`/post/${postId}`}>{children}</S.PostImageLink>
  ) : (
    <S.PostImage role="button">{children}</S.PostImage>
  );
};

export default PostWrapper;
