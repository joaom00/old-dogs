import React from 'react'
import { useParams } from 'react-router-dom'

import { useFollowers } from '../../hooks'

import FollowSection from '../../components/FollowSection'
import Heading from '../../components/Heading'

import * as S from './styles'

// TODO: add pagination
const Followers = () => {
  const { username } = useParams<{ username: string }>()
  const { data } = useFollowers(username)

  const followCount = data?.pages[0].followers_count

  return (
    <S.Wrapper>
      <Heading label={`${followCount} seguidores`}>Seguidores</Heading>

      <ul>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.follows.map((follow) => (
              <FollowSection key={follow.follower.id} user={follow.follower} hasFollowed={follow.hasFollowed} />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </S.Wrapper>
  )
}

export default Followers
