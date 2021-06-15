import React, { useEffect, useRef } from 'react';

import Modal from '../../components/Modal';
import Post from '../../components/Post';

import useModal from '../../hooks/useModal';
import usePosts from '../../hooks/usePosts';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import * as S from './styles';

const Home = () => {
  const groupsQuery = usePosts();
  const { isOpen } = useModal();

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: groupsQuery.fetchNextPage,
    enabled: groupsQuery.hasNextPage
  });

  return (
    <S.Wrapper>
      {isOpen && <Modal />}
      {groupsQuery.data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </React.Fragment>
      ))}
      <div ref={loadMoreRef}></div>
    </S.Wrapper>
  );
};

export default Home;
