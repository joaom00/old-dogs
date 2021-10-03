import React, { useEffect } from 'react';

import Post from '../../components/Post';
import Modal from '../../components/Modal';

import usePosts from '../../hooks/usePosts';
import { useModal } from '../../contexts/ModalContext';

import * as S from './styles';

const Home = () => {
  const postsQuery = usePosts();
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, [closeModal]);

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
      </S.Wrapper>
    );
  }

  return <div>Carregando...</div>;
};

export default Home;
