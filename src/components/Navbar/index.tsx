import React from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { Nav, NavContainer, Logo } from "./styled";
import logoImg from "../../assets/logo.png";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Nav>
        <Container>
          <NavContainer>
            <Logo onClick={() => navigate("/home")} src={logoImg} />
            <ul className="nav__links">
              {navbar.map(({ id, path, title }) => {
                return (
                  <li key={id}>
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
                );
              })}
            </ul>
          </NavContainer>
        </Container>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
