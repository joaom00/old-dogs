import styled from 'styled-components';
import convertPixelToRem from '../../utils/convertPixelToRem';

export const Wrapper = styled.div``;

export const Main = styled.main`
  width: 100%;
  max-width: ${convertPixelToRem(616)};
  margin: ${convertPixelToRem(32)} auto 0 auto;
`;

export const Post = styled.div`
  border: 1px solid #d9dbe9;
  overflow: hidden;

  & + & {
    margin-top: ${convertPixelToRem(32)};
  }
`;

export const PostImage = styled.div`
  object-fit: cover;
  /* width: ${convertPixelToRem(614)};
  height: ${convertPixelToRem(614)};

  img {
    max-width: ${convertPixelToRem(614)};
  } */
`;

export const PostInfoWrapper = styled.div`
  padding: ${convertPixelToRem(16)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserImage = styled.img`
  background-size: cover;
  width: ${convertPixelToRem(32)};
  height: ${convertPixelToRem(32)};
  border-radius: 50%;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: ${convertPixelToRem(8)};

    p:first-child {
      font-weight: bold;
      font-size: ${convertPixelToRem(14)};
      line-height: 19px;
      color: #14142b;
    }

    p:last-child {
      font-weight: 400;
      font-size: ${convertPixelToRem(12)};
      line-height: 15px;
      color: #a0a3bd;
    }

    p + p {
      margin-top: ${convertPixelToRem(4)};
    }
  }
`;

export const Icons = styled.div`
  svg {
    cursor: pointer;
  }

  svg + svg {
    margin-left: ${convertPixelToRem(16)};
  }
`;
