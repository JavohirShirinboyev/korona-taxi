import React, { useState } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Nav,
  NavContainer,
  Logo,
  MenuBar,
  MobileContainer,
  MobileNav,
} from "./styled";
import logoImg from "../../assets/logo.png";
import { navbar } from "../../utils/navbar";
// ! react icons import
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(true);

  const reportWindowSize = () => {
    if (window.innerWidth > 768) setIsMobile(true);
  };
  window.onresize = reportWindowSize;

  return (
    <div>
      <Nav>
        <Container>
          <NavContainer>
            <Logo onClick={() => navigate("/home")} src={logoImg} />
            <ul className="nav__links">
              {navbar.map(({ hidden, path, title }, index) => {
                return (
                  !hidden && (
                    <li key={index}>
                      <NavLink style={{ textDecoration: "none" }} to={path}>
                        {({ isActive }) => (
                          <span
                            className={
                              isActive ? "nav__link active" : "nav__link"
                            }
                          >
                            {title}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  )
                );
              })}
            </ul>
            <MenuBar>
              {isMobile ? (
                <AiOutlineMenu
                  onClick={() => setIsMobile(false)}
                  className="menu__icon"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setIsMobile(true)}
                  className="menu__icon"
                />
              )}
            </MenuBar>
          </NavContainer>
        </Container>
      </Nav>

      {/* Mobil Container */}
      <MobileContainer isMobile={isMobile ? 1 : 0}>
        <Container>
          <MobileNav onClick={() => setIsMobile(true)}>
            {navbar.map(({ hidden, path, title }, index) => {
              return (
                !hidden && (
                  <NavLink
                    key={index}
                    style={{ textDecoration: "none" }}
                    to={path}
                  >
                    {({ isActive }) => (
                      <span
                        className={isActive ? "nav__link active" : "nav__link"}
                      >
                        {title}
                      </span>
                    )}
                  </NavLink>
                )
              );
            })}
          </MobileNav>
        </Container>
      </MobileContainer>
      <Outlet />
    </div>
  );
};

export default Navbar;
