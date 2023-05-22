import React from "react";
import { Container } from "reactstrap";
import "./styled.css";
import headerCar from "../../assets/header__car.png";
import vector from "../../assets/Vector.png";
import Button from "../Generic/Button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/config";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const signOutClick = () => {
    auth.signOut();
    navigate("/")
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="home__container">
        <div className="home__blur">
          <Container>
            <div className="home__content">
              <div className="home__content__left">
                <h1 className="home__title">
                  Biz bilan maroqli sayohat qiling!
                </h1>
                <Button
                  onClick={() => navigate("/order")}
                  width={180}
                  height={50}
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
