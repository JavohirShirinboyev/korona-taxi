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
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 30px;
`;

export {DriverContainer, MenuWrapper, Section}