import React, { useEffect, useRef } from 'react';

import Post from '../../components/Post';
import Modal from '../../components/Modal';

import useModal from '../../hooks/useModal';
import usePosts from '../../hooks/usePosts';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import * as S from './styles';

const Home = () => {
  const postsQuery = usePosts();
  const { isOpen, closeModal } = useModal();

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, [closeModal]);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: postsQuery.fetchNextPage,
    enabled: postsQuery.hasNextPage
  });

  if (postsQuery.isSuccess) {
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
        <div ref={loadMoreRef}></div>
      </S.Wrapper>
    );
  }

  return <div>Carregando...</div>;
};

export default Home;
