import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Button } from "reactstrap";
import { DriverContainer, MenuWrapper, Section } from "./styled";
import InputDriver from "./InputDriver";


const Driver = () => {
  const [passengerCount, setPassengerCount] = useState(0);

  const decrement = () => {
    if (passengerCount <= 0) {
      setPassengerCount(0);
    } else {
      setPassengerCount(passengerCount - 1);
    }
  };

  const increment = () => {
    setPassengerCount(passengerCount + 1);
  };

  const dataAdd = () => {};
  const dataClean = () => {};

  return (
    <DriverContainer>
      <Container>
        <MenuWrapper>
          <h1 className="subTitle">Manzil va Vaqtni kiriting</h1>
          <Section>
            <InputDriver type="text" pleceholder="Qayirdan" />
            <InputDriver type="text" pleceholder="Qayirga"  />
            <InputDriver type="date" pleceholder="Kun" />
            <InputDriver type="time" pleceholder="Vaqt" />
          </Section>
          <h1 className="subTitle">Yo'lovchi soni va ma'lumotlarni kiriting</h1>
          <Section>
            <div>
              <Button onClick={decrement}>-</Button>
              <span>{passengerCount}</span>
              <Button onClick={increment} color="primary">
                +
              </Button>
            </div>
            <InputDriver type="text" pleceholder="Narx" />
            <InputDriver type="text" pleceholder="Avtomobil turi" />
            <InputDriver type="text" pleceholder="Avtomobil nomer" />
          </Section>
          <h1 className="subTitle">Aloqa</h1>
          <Section>
            <InputDriver type="text" pleceholder="Telefon raqam" />
            <InputDriver type="text" pleceholder="Telegram user" />
          </Section>
          <div className="buttun__box">
            <Button onClick={dataClean} color="danger">
              Tozalash
            </Button>
            <Button onClick={dataAdd} color="primary">
              Saqlash
            </Button>
          </div>
        </MenuWrapper>
      </Container>
    </DriverContainer>
  );
};

export default Driver;
