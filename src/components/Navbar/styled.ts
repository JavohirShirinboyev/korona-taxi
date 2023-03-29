import styled from "styled-components";

const Nav = styled.div`
  width: 100vw;
  height: 80px;
  background-color: var(--bgColorWarning);
`;

const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav__links {
    display: flex;
    align-items: center;
    height: 80px;
    gap: 14px;
    list-style: none;
    margin: 0;
  }

  .nav__link {
    width: max-content;
    text-decoration: none;
    font-size: 16px;
    color: var(--textColorBlack);
    font-weight: 600;
    position: relative;
    padding: 0 10px;
  }
  .nav__link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background-color: var(--textColorBlack);
    transition: 0.3s;
    transition-timing-function: ease-in-out;
    transform: scaleX(0);
  }
  .nav__link.active::after {
    transform: scaleX(1);
  }
`;

const Logo = styled.img`
  width: 110px;
  cursor: pointer;
`;

export { Nav, NavContainer, Logo };
