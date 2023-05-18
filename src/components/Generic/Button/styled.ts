import styled from "styled-components";

interface ButtonProps {
  height?: number;
  width?: number;
}

const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ height }) => (height ? `${height}px` : "56px")};
  width: ${({ width }) => (width ? `${width}px` : "220px")};

  font-size: 14px;
  font-weight: 600;
  background-color: var(--bgColorWarning);
  color: var(--textColorBlack);
  border-radius: 7px;
  cursor: pointer;
  border: none;
  outline: none;
  :active {
    opacity: 0.7;
  }
`;

export { Container };
