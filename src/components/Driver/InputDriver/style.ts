import styled from "styled-components";

const ContainerInput = styled.input`
  border-radius: 2px;
  border: 1px solid #ccc;
  outline: none;
  padding-left: 16px;
  color: #0d263b;
  font-size: xx14px;
  height: 40px;
  width: 100%;
  padding-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`

const Icon = styled.div`
  position: absolute;
  left: 10px;
`

export { ContainerInput, Wrapper, Icon };
