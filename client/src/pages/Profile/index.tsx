import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { notifyError } from '../../services/notify'

import { useModal } from '../../contexts/ModalContext'
import { useUser, useUserPosts, useUpdateAvatarMutation, useFollowMutation, useGetUserLogged } from '../../hooks'

import Post from '../../components/Post'
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
import Button from '../../components/Button'

import userWithoutImage from '../../assets/user.jpg'

import * as S from './styles'

const Profile = () => {
  const userLogged = useGetUserLogged()
  const { isOpen } = useModal()
  const { username } = useParams<{ username: string }>()
  const userQuery = useUser(username)
  const userPostsQuery = useUserPosts(userQuery.data?.id)
  const updateAvatar = useUpdateAvatarMutation()
  const followMutation = useFollowMutation()

  const hasPosts = userPostsQuery.data?.pages[0].posts.length

  function fileHandle(event: React.ChangeEvent<HTMLInputElement>) {
    let file
    if (event.target.files) file = event.target.files[0]

    const data = new FormData()

    !!file && data.append('avatar', file)

    updateAvatar.mutate(data, {
      onError: () => notifyError()
    })
  }

  if (userPostsQuery.isLoading) {
    return <Loading fullScreen />
  }

  if (userQuery.error instanceof Error) {
    return (
      <>
        <S.ErrorHeading>Esta página não está disponível.</S.ErrorHeading>
        <S.ErrorDescription>
          O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida.
        </S.ErrorDescription>
      </>
    )
  }

  return (
    <S.Wrapper>
      {isOpen && <Modal />}

      <S.ProfileWrapper>
        <S.Profile>
          <label htmlFor="avatar">
            <S.ProfileImage src={userQuery.data?.avatarUrl ?? userWithoutImage} />
          </label>
          <input type="file" id="avatar" name="avatar" onChange={fileHandle} />
          <S.ProfileInfoWrapper>
            <S.Username>
              {userQuery.data?.username}

              {userLogged?.username !== username && (
                <Button variant="secondary" size="xsmall" onClick={() => followMutation.mutate(username)}>
                  {userQuery.data?.isFollowed ? 'Deixar de seguir' : 'Seguir'}
                </Button>
              )}
            </S.Username>
            <S.ProfileInfo>
              <S.Data>
                <S.Strong>{userQuery.data?.posts_count}</S.Strong>
                publicações
              </S.Data>
              <Link to={`/${username}/followers`}>
                <S.Data>
                  <S.Strong>{userQuery.data?.followers_count}</S.Strong>
                  seguidores
                </S.Data>
              </Link>
              <Link to={`/${username}/following`}>
                <S.Data>
                  <S.Strong>{userQuery.data?.following_count}</S.Strong>
                  seguindo
                </S.Data>
              </Link>
            </S.ProfileInfo>
          </S.ProfileInfoWrapper>
        </S.Profile>
      </S.ProfileWrapper>

      {!hasPosts ? (
        <S.HasNoPosts>
          Você não possui nenhuma foto
          <br />
          <br /> <S.NewPhotoLink to="/new-photo">Que tal postar uma?</S.NewPhotoLink>
        </S.HasNoPosts>
      ) : (
        <S.Feed>
          {userPostsQuery.data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.posts.map((post) => (
                <Post key={post.id} withLabel={false} {...post} />
              ))}
            </React.Fragment>
          ))}
        </S.Feed>
      )}
    </S.Wrapper>
  )
}

export default Profile
