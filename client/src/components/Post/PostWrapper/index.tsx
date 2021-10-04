import * as S from './styles';

type TPostWrapperProps = {
  postId: string;
  openModal: (postId: string) => void;
  children: React.ReactNode;
};

const PostWrapper = ({ postId, openModal, children }: TPostWrapperProps) => {
  const isMobileScreen = window.matchMedia('(max-width: 1024px)').matches;

  return isMobileScreen ? (
    <S.PostImageLink to={`/post/${postId}`}>{children}</S.PostImageLink>
  ) : (
    <S.PostImage role="button" onClick={() => openModal(postId)}>
      {children}
    </S.PostImage>
  );
};

export default PostWrapper;
