import { TUser } from '../../contexts/AuthContext'
import { useFollowMutation } from '../../hooks'

import Button from '../Button'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

type TFollowSectionProps = {
  user: TUser
  hasFollowed: boolean
}

const FollowSection = ({ user, hasFollowed }: TFollowSectionProps) => {
  const followMutation = useFollowMutation()

  return (
    <>
      <S.UserWrapper>
        <img src={user.avatarUrl ?? userWithoutImage} />
        <p>{user.username}</p>
        <Button variant="secondary" size="xsmall" onClick={() => followMutation.mutate(user.username)}>
          {hasFollowed ? 'Deixar de seguir' : 'Seguir'}
        </Button>
      </S.UserWrapper>
    </>
  )
}

export default FollowSection
