import React, { useEffect } from 'react';
import { InView } from 'react-intersection-observer';

import usePosts from '../../hooks/usePosts';
import { useModal } from '../../contexts/ModalContext';

import Post from '../../components/Post';
import Modal from '../../components/Modal';
import Loading from '../../components/Loading';

import * as S from './styles';

const Home = () => {
  const postsQuery = usePosts();
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, [closeModal]);

  if (postsQuery.isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <S.Wrapper>
      {isOpen && <Modal />}

      {postsQuery.data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </React.Fragment>
      ))}

      <InView onChange={(inView) => inView && postsQuery.fetchNextPage()} />

      {postsQuery.isFetchingNextPage ? (
        <Loading />
      ) : (
        <S.NoHasNextPage>Não há mais publicações</S.NoHasNextPage>
      )}
    </S.Wrapper>
  );
};

export default Home;
