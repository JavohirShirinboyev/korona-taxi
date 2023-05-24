import styled from "styled-components";

const ServiceContainer = styled.div`
  width: 100%;
  min-height: 88vh;
  background-color: var(--bgColorWarning);
  border-top: 2px solid var(--textColorBlack);
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  text-align: center;

  margin: 50px 0;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 200px;
  text-align: center;
  padding: 1.5rem 0;
  border: 1px solid black;
  margin-bottom: 1rem;
  border-radius: 7px;
  height: 200px;
  width: 220px;
  cursor: pointer;
`;

const CardImg = styled.img`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
  width: 75px;
`;

const CardTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #333;
`;

export { ServiceContainer, Title, Card, CardImg, CardTitle, CardContainer };
