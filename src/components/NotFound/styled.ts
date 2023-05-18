import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 44px;
  font-weight: 500;
  color: var(--textColorWarning);
  margin-bottom: 15px;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const Info = styled.p`
  font-size: 18px;
  color: var(--textColorBlack);
  font-family: Montserrat;
  font-weight: 200;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export { Container, Title, Info };
