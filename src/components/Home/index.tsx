import React from "react";
import { Container } from "reactstrap";
import "./styled.css";
import headerCar from "../../assets/header__car.png";
import vector from "../../assets/Vector.png"
import Button from "../Generic/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home__container">
        <div className="home__blur">
          <Container>
            <div className="home__content">
              <div className="home__content__left">
                <h1 className="home__title">
                  Biz bilan maroqli <br /> sayohat qiling!
                </h1>
                <Button
                  onClick={() => navigate("/order")}
                  width={180}
                  height={50}
                />
              </div>
              <div className="home__content__right">
                <img
                  className="home__header__img"
                  src={headerCar}
                  alt="Taxi image"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
