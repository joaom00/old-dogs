import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import Post from '../../components/Post';
import Modal from '../../components/Modal';

import useUser from '../../hooks/useUser';
import useModal from '../../hooks/useModal';
import useUserPosts from '../../hooks/useUserPosts';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

const Profile = () => {
  const { isOpen } = useModal();
  const { username } = useParams<{ username: string }>();
  const userQuery = useUser(username);
  const userPostsQuery = useUserPosts(userQuery.data?.id);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: userPostsQuery.fetchNextPage,
    enabled: userPostsQuery.hasNextPage
  });

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
                <Link to="/new-photo">Postar foto</Link>
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
        <div ref={loadMoreRef}></div>
      </S.Wrapper>
    );
  }

  return <div>Carregando...</div>;
};

export default Profile;
