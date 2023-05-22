import React, { forwardRef } from "react";
import { ContainerInput, Icon, Wrapper } from "./style";

interface TypeInputDriver {
  type?: "text" | "password" | "number" | "tel" | "time" | "email";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pleceholder?: string;
  width?: number;
  height?: number;
  name?: string;
  value?: string;
  defaultValue?: string;
}

const InputDriver = forwardRef(
  (
    {
      type,
      onChange,
      value,
      defaultValue,
      pleceholder,
      name,
      width,
      height,
    } : TypeInputDriver
  ) => {
    return (
      <Wrapper>
        <ContainerInput
          type={type}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          placeholder={pleceholder}
          name={name}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default InputDriver;
