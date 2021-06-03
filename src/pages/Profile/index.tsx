import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import photo from '../../assets/login.jpg';

import * as S from './styles';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Profile>
          <S.ProfileImage src={photo} />
          <S.ProfileInfoWrapper>
            <S.Username>
              dog
              <Link to="/editprofile">
                <FiSettings size={24} />
              </Link>
            </S.Username>
            <S.ProfileInfo>
              <S.Data>
                <S.Strong>6</S.Strong>
                publicações
              </S.Data>
              <S.Data>
                <S.Strong>10k</S.Strong>
                seguidores
              </S.Data>
              <S.Data>
                <S.Strong>100</S.Strong>
                seguindo
              </S.Data>
            </S.ProfileInfo>
          </S.ProfileInfoWrapper>
        </S.Profile>
      </S.ProfileWrapper>

      <S.Feed>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
        <li>
          <img src={photo} alt="" />
        </li>
      </S.Feed>
    </S.Wrapper>
  );
};

export default Profile;
