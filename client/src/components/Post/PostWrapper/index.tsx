import { useModal } from '../../../contexts/ModalContext'

import * as S from './styles'

type TPostWrapperProps = {
  postId: string
  children: React.ReactNode
}

const PostWrapper = ({ postId, children }: TPostWrapperProps) => {
  const { openModal } = useModal()

  const isMobileScreen = window.matchMedia('(max-width: 1024px)').matches

  return isMobileScreen ? (
    <S.PostImageLink to={`/post/${postId}`}>{children}</S.PostImageLink>
  ) : (
    <S.PostImage role="button" onClick={() => openModal(postId)}>
      {children}
    </S.PostImage>
  )
}

export default PostWrapper
