import React from "react";
import { Container } from "./styled";

interface InputType {
  width?: number;
  height?: number;
  type?: "text" | "password" | "number" | "tel" | "time" | "email";
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  width,
  height,
  type,
  name,
  placeholder,
  autoComplete,
  onChange,
  ...rest
}: InputType) => {
  return (
    <Container
     onChange={onChange}
      width={width}
      height={height}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...rest}
    ></Container>
  );
};

export default Input;
