import React from "react";
import { Container } from "./styled";

interface ButtonType {
  children?: string;
  width?: number;
  height?: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, width, height, onClick }: ButtonType) => {
  return (
    <Container onClick={onClick} height={height} width={width}>
      {children || "Buyurtma berish"}
    </Container>
  );
};

export default Button;
