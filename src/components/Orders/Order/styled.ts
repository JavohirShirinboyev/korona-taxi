import styled from "styled-components";
import { AiFillPhone } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Container = styled.div`
  width: 380px;
  height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 0 0 10px 0;
  margin: 20px 0;
  transition: transform 0.3s ease-in-out;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;

const Img = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  :hover {
    z-index: -10;
  }
`;

const Contactbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h1`
  color: #0d263b;
  font-size: 20px;
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
`;

const SubTitle = styled.p`
  color: #696969;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div``;

const SelectContainer = styled.select`
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const BottomTitle = styled.h3`
  color: #0d263b;
  font-size: 14px;
  margin: 10px 0 20px 0;
  font-family: "Montserrat", sans-serif;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaddingBox = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const Icons: any = styled.div``;

Icons.AiFillPhone = styled(AiFillPhone)`
  color: #fff;
  font-size: 35px;
  cursor: pointer;
`;

Icons.FaTelegramPlane = styled(FaTelegramPlane)`
  color: #fff;
  font-size: 35px;
  cursor: pointer;
`;

export {
  Container,
  Title,
  SubTitle,
  Img,
  Content,
  Box,
  SelectContainer,
  BottomContainer,
  BottomTitle,
  PaddingBox,
  ImgContainer,
  Contactbox,
};
