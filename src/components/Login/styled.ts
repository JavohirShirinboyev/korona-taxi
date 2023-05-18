import styled from "styled-components";
import loginBg from "../../assets/loginBg.avif"

const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${loginBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  ::after {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

const LoginBox = styled.div`
    width: 350px;
    height: 500px;
    background-color: var(--textColorBlack);
    border-radius: 12px;
`

export { Container, LoginBox };
