import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import Post from '../../components/Post';
import Modal from '../../components/Modal';

import useUser from '../../hooks/useUser';
import useUserPosts from '../../hooks/useUserPosts';
import { useModal } from '../../contexts/ModalContext';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

const Profile = () => {
  const { isOpen } = useModal();
  const { username } = useParams<{ username: string }>();
  const userQuery = useUser(username);
  const userPostsQuery = useUserPosts(userQuery.data?.id);

  if (userQuery.isSuccess && userPostsQuery.isSuccess) {
    return (
      <S.Wrapper>
        {isOpen && <Modal />}
        <S.ProfileWrapper>
          <S.Profile>
            <S.ProfileImage
              src={userQuery.data.avatarUrl ?? userWithoutImage}
            />
            <S.ProfileInfoWrapper>
              <S.Username>
                {userQuery.data.username}
                <Link to="/profile/edit">
                  <FiSettings size={24} />
                </Link>
              </S.Username>
              <S.ProfileInfo>
                <S.Data>
                  <S.Strong>{userQuery.data.posts}</S.Strong>
                  publicações
                </S.Data>
                <S.Data>
                  <S.Strong>{userQuery.data.followers}</S.Strong>
                  seguidores
                </S.Data>
                <S.Data>
                  <S.Strong>{userQuery.data.following}</S.Strong>
                  seguindo
                </S.Data>
              </S.ProfileInfo>
            </S.ProfileInfoWrapper>
          </S.Profile>
        </S.ProfileWrapper>

        <S.Feed>
          {userPostsQuery.data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.posts.map((post) => (
                <Post key={post.id} post={post} withLabel={false} />
              ))}
            </React.Fragment>
          ))}
        </S.Feed>
      </S.Wrapper>
    );
  }

  return <div>Carregando...</div>;
};

export default Profile;
