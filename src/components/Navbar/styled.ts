import styled from "styled-components";

interface NavbarProps {
  isMobile: number;
}

const Nav = styled.div`
  width: 100vw;
  height: 12vh;
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
    @media screen and (max-width: 768px) {
      display: none;
    }
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

const MenuBar = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }

  .menu__icon {
    cursor: pointer;
    font-size: 22px;
  }
`;

// Mobile Navbar

const MobileContainer = styled.div<NavbarProps>`
  background: var(--bgColorWarning);
  width: 100vw;
  transform: ${({ isMobile }) =>
    isMobile ? "translateX(-100vw)" : "translateX(0)"};
  transition: transform 0.2s ease-out;

  padding: 30px 0;
  border-top: 2px solid var(--textColorBlack);
  position: absolute;
  z-index: 100;
`;

const MobileNav = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
  .nav__link {
    width: max-content;
    text-decoration: none;
    font-size: 16px;
    color: var(--textColorBlack);
    font-weight: 600;
    position: relative;
    padding: 0 10px;
  }
`;

export { Nav, NavContainer, Logo, MenuBar, MobileContainer, MobileNav };
