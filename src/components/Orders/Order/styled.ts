import styled from "styled-components";

interface TitleType {
  size: string;
}

const Container = styled.div`
  width: 380px;
  height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 10px 20px;
  margin: 20px 0;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Title = styled.h1<TitleType>`
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
};
