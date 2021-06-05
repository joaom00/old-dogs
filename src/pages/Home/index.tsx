import { useEffect, useState } from 'react';

import Modal from '../../components/Modal';

import * as S from './styles';
import usePosts from '../../hooks/usePosts';
import Post from '../../components/Post';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPosId] = useState('');
  const { data } = usePosts();

  function handleOpenModal(postId: string) {
    setIsOpen((oldValue) => !oldValue);
    setPosId(postId);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <S.Wrapper>
      {isOpen && <Modal postId={postId} handleOpenModal={setIsOpen} isOpen={isOpen} />}
      {data?.map((post) => (
        <Post key={post.id} post={post} handleOpenModal={handleOpenModal} />
      ))}
    </S.Wrapper>
  );
};

export default Home;
