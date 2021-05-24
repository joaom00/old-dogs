import { FiHeart, FiBookmark } from 'react-icons/fi';

import Header from '../../components/Header';

import examplaImg from '../../assets/photo.png';

import * as S from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.Post>
          <S.PostImage>
            <img width="614" height="614" src={examplaImg} alt="" />
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
              <FiHeart size={24} />
              <FiBookmark size={24} />
            </S.Icons>
          </S.PostInfoWrapper>
        </S.Post>

        <S.Post>
          <img src={examplaImg} width="614" height="614" alt="" />
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
              <FiHeart size={24} />
              <FiBookmark size={24} />
            </S.Icons>
          </S.PostInfoWrapper>
        </S.Post>

        <S.Post>
          <img src={examplaImg} width="614" height="614" alt="" />
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
              <FiHeart size={24} />
              <FiBookmark size={24} />
            </S.Icons>
          </S.PostInfoWrapper>
        </S.Post>
      </S.Main>
    </>
  );
};

export default Home;
