import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  Icons,
} from "./styled";
import orderImg from "../../../assets/orderImg.jpg";
import { Badge, Button } from "reactstrap";
import OrderButton from "../../Generic/Button";

const Order = ({...props}) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if(count <= 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  const increment = () => {
    setCount(count + 1)
  }

  const navigate = useNavigate();
  return (
    <Container>
      <ImgContainer>
        <Img src={props.imgSrc} />
        <Contactbox>
          <Icons.AiFillPhone />
          <Icons.FaTelegramPlane />
        </Contactbox>
      </ImgContainer>
      <PaddingBox>
        <Title>{props.title}</Title>
        <SubTitle>Soat: {props.time}</SubTitle>
        <Content>
          <Box>
            <SubTitle>
              Avtomobil: &nbsp;
              <Badge color="primary">{props.car}</Badge>
            </SubTitle>
            <SubTitle>
              Narx: &nbsp;
              <Badge color="primary">{props.price} so'm</Badge>
            </SubTitle>
          </Box>
          <Box>
            <SubTitle>
              Bo'sh joy soni: &nbsp;
              <Badge color="primary">{props.boshjoy}</Badge>
            </SubTitle>
            <SubTitle>
              Haydovchi: &nbsp;
              <Badge color="danger">{props.name}</Badge>
            </SubTitle>
          </Box>
        </Content>
        <BottomTitle>Yo'lovchilar sonini kiriting:</BottomTitle>
        <BottomContainer>
          <div>
            <Button onClick={decrement}>-</Button>
            <span>{count}</span>
            <Button onClick={() => setCount(count + 1)} color="primary">+</Button>
          </div>
          <OrderButton
            width={150}
            height={35}
            onClick={() => navigate("/home")}
          />
        </BottomContainer>
      </PaddingBox>
    </Container>
  );
};

export default Order;
