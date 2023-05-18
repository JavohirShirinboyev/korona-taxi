import React from "react";
import {
  ServiceContainer,
  Title,
  Card,
  CardImg,
  CardContainer,
  CardTitle,
} from "./styled";
import { Container, Row } from "reactstrap";
import data from "./serviceData.json"

console.log(data);

const About = () => {
  
  return (
    <ServiceContainer>
      <Container>
        <Title>Bizning xizmatlar</Title>
        <CardContainer>
          {data.map(({ id, imgSrc, title }) => {
            return (
              <Card key={id}>
                <CardImg src={imgSrc} />
                <CardTitle>{title}</CardTitle>
              </Card>
            );
          })}
        </CardContainer>
      </Container>
    </ServiceContainer>
  );
};

export default About;
