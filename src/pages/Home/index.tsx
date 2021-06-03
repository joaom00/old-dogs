import { useEffect, useState } from 'react';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

import examplaImg from '../../assets/login.jpg';
import Modal from '../../components/Modal';

import * as S from './styles';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen((oldValue) => !oldValue);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <S.Wrapper>
      <Modal setIsOpen={handleOpenModal} isOpen={isOpen} />
      <S.Post>
        <S.PostImage>
          <img src={examplaImg} alt="" role="button" onClick={handleOpenModal} />
        </S.PostImage>
        <S.PostInfoWrapper>
          <S.PostInfo>
            <S.UserImage
              style={{
                backgroundImage: `url(${examplaImg})`
              }}
            />
            <span>
              <p>dog</p>
              <p>2 hrs ago</p>
            </span>
          </S.PostInfo>
          <S.Icons>
            <S.Likes>
              <S.TotalLikes>130</S.TotalLikes>
              <FiHeart size={24} />
            </S.Likes>
            <S.Comments>
              <S.TotalComments>12</S.TotalComments>
              <FiMessageCircle size={24} onClick={handleOpenModal} />
            </S.Comments>
          </S.Icons>
        </S.PostInfoWrapper>
      </S.Post>

      <S.Post>
        <S.PostImage>
          <img src={examplaImg} alt="" role="button" onClick={handleOpenModal} />
        </S.PostImage>
        <S.PostInfoWrapper>
          <S.PostInfo>
            <S.UserImage
              style={{
                backgroundImage: `url(${examplaImg})`
              }}
            />
            <span>
              <p>dog</p>
              <p>2 hrs ago</p>
            </span>
          </S.PostInfo>
          <S.Icons>
            <S.Likes>
              <S.TotalLikes>130</S.TotalLikes>
              <FiHeart size={24} />
            </S.Likes>
            <S.Comments>
              <S.TotalComments>12</S.TotalComments>
              <FiMessageCircle size={24} onClick={handleOpenModal} />
            </S.Comments>
          </S.Icons>
        </S.PostInfoWrapper>
      </S.Post>

      <S.Post>
        <S.PostImage>
          <img src={examplaImg} alt="" role="button" onClick={handleOpenModal} />
        </S.PostImage>
        <S.PostInfoWrapper>
          <S.PostInfo>
            <S.UserImage
              style={{
                backgroundImage: `url(${examplaImg})`
              }}
            />
            <span>
              <p>dog</p>
              <p>2 hrs ago</p>
            </span>
          </S.PostInfo>
          <S.Icons>
            <S.Likes>
              <S.TotalLikes>130</S.TotalLikes>
              <FiHeart size={24} />
            </S.Likes>
            <S.Comments>
              <S.TotalComments>12</S.TotalComments>
              <FiMessageCircle size={24} onClick={handleOpenModal} />
            </S.Comments>
          </S.Icons>
        </S.PostInfoWrapper>
      </S.Post>
    </S.Wrapper>
  );
};

export default Home;
