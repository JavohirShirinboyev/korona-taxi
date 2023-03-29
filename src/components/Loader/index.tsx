import React from "react";
import { Triangle } from "react-loader-spinner";
import { Container } from "./styled";

const Loader = () => {
  return (
    <Container>
      <Triangle
        height="80"
        width="80"
        color="#ffcc00"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </Container>
  );
};

export default Loader;
