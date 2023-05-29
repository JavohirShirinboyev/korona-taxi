import styled from "styled-components";

const DriverContainer = styled.div`
    width: 100%;
    height: 88vh;
    border: 1px solid red;
    padding-top: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #ffffff;
  border: 1px solid #ccc;
  .buttun__box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
  }
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    span {
      padding: 0 10px;
    }
  }
`;

export {DriverContainer, MenuWrapper, Section}