import styled from 'styled-components';

import loginBg from '../../assets/login.jpg';

export const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: url(${loginBg}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const Forms = styled.div`
  max-width: 30rem;
  padding: 2rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
