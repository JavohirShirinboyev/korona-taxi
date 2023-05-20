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
} from "./styled";
import orderImg from "../../../assets/orderImg.jpg";
import { Badge } from "reactstrap";
import Button from "../../Generic/Button";

const options = [1, 2, 3, 4];

const Order = () => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    undefined
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10); // Tanlangan qiymatni raqamga aylantiramiz
    setSelectedOption(value);
  };
  const navigate = useNavigate();
  console.log(selectedOption);
  return (
    <Container>
      <Img src={orderImg} />
      <Title size="big" >Samarqand - Ishtixon</Title>
      <SubTitle>Soat: 7:00</SubTitle>
      <Content>
        <Box>
          <SubTitle>
            Avtomobil: &nbsp;
            <Badge color="primary">Spark</Badge>
          </SubTitle>
          <SubTitle>
            Narx: &nbsp;
            <Badge color="primary">30 000 so'm</Badge>
          </SubTitle>
        </Box>
        <Box>
          <SubTitle>
            Bo'sh joy soni: &nbsp;
            <Badge color="primary">1</Badge>
          </SubTitle>
          <SubTitle>
            Haydovchi: &nbsp;
            <Badge color="danger">Javokhir</Badge>
          </SubTitle>
        </Box>
      </Content>
      <BottomTitle>Yo'lovchilar sonini kiriting:</BottomTitle>
      <BottomContainer>
        <SelectContainer value={selectedOption} onChange={handleChange}>
          <option value={undefined}>Necha kishi...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectContainer>
        <Button width={150} height={35} onClick={() => navigate("/home")} />
      </BottomContainer>
    </Container>
  );
};

export default Order;
