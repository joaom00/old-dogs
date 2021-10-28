import React from 'react'
import { useParams } from 'react-router-dom'

import { useFollowing } from '../../hooks'

import FollowSection from '../../components/FollowSection'
import Heading from '../../components/Heading'

import * as S from './styles'

// TODO: add pagination
const Following = () => {
  const { username } = useParams<{ username: string }>()
  const { data } = useFollowing(username)

  const followCount = data?.pages[0].following_count

  return (
    <S.Wrapper>
      <Heading label={`${followCount} seguindo`}>Seguindo</Heading>

      <ul>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.follows.map((follow) => (
              <FollowSection key={follow.user.id} user={follow.user} hasFollowed={follow.hasFollowed} />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </S.Wrapper>
  )
}

export default Following
