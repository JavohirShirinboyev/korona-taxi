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
          <h1 className="subTitle">Manzil va Vaqtni kiriting</h1>
          <Section>
            <InputDriver type="text" pleceholder="Qayirdan" />
            <InputDriver type="text" pleceholder="Qayirga" />
            <InputDriver type="date" pleceholder="Kun" />
            <InputDriver type="time" pleceholder="Vaqti" />
          </Section>
          <h1 className="subTitle">Ma'lumotlar</h1>
          <Section>
            <InputDriver type="text" pleceholder="kishi soni" />
            <InputDriver type="text" pleceholder="Narx" />
            <InputDriver type="text" pleceholder="Avtomobil turi" />
            <InputDriver type="text" pleceholder="Avtomobil nomer" />
          </Section>
          <h1 className="subTitle">Aloqa</h1>
          <Section>
            <InputDriver type="text" pleceholder="Telefon raqam" />
            <InputDriver type="text" pleceholder="Telegram user" />
          </Section>
        </MenuWrapper>
      </Container>
    </DriverContainer>
  );
};

export default Driver;
