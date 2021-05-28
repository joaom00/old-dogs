import photo from '../../assets/photo.png';

import * as S from './styles';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Profile>
          <S.ProfileImage src={photo} />
          <S.ProfileInfoWrapper>
            <S.Username>dog</S.Username>
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
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
      </S.Feed>
    </S.Wrapper>
  );
};

export default Profile;
