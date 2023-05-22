import React from "react";
import { Container } from "reactstrap";
import { DriverContainer, MenuWrapper, Section } from "./styled";
import InputDriver from "./InputDriver";

const Driver = () => {
  // const countryRef = useRef();
  // const regionRef = useRef();
  // const cityRef = useRef();
  // const zipCodeRef = useRef();

  // const roomsRef = useRef();
  // const sizeeRef = useRef();
  // const sortRef = useRef();

  // const minPriceRef = useRef();
  // const maxPriceRef = useRef();

  return (
    <DriverContainer>
      <Container>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <InputDriver pleceholder="Country" />
            <InputDriver pleceholder="Region" />
            <InputDriver pleceholder="City" />
            <InputDriver pleceholder="Zip code" />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <InputDriver pleceholder="Rooms" />
            <InputDriver pleceholder="Size" />
            <InputDriver pleceholder="Sort" />
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <InputDriver pleceholder="Min price" />
            <InputDriver pleceholder="Max price" />
          </Section>
        </MenuWrapper>
      </Container>
    </DriverContainer>
  );
};

export default Driver;
