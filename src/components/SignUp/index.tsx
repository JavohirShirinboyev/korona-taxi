import React, { useState } from "react";
import { useNavigate, Link, useNavigation } from "react-router-dom";
import { Container, LoginBox, RadioContainer } from "./styled";
import Input from "../Generic/Input";
import Button from "../Generic/Button";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restPassword, setRestPassword] = useState("");
  const [isStatus, setIsStatus] = useState(false);

  const register = () => {
    navigate("/")
  };

  return (
    <Container>
      <LoginBox>
        <Input
          width={250}
          type="text"
          name="name"
          placeholder="Ismingizni kiriting"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          width={250}
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          width={250}
          type="password"
          name="password"
          placeholder="Parol"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          width={250}
          type="password"
          name="password"
          placeholder="Parolni qayta kiriting"
          autoComplete="off"
          onChange={(e) => setRestPassword(e.target.value)}
        />
        <RadioContainer>
          <input onChange={() => setIsStatus(true)} type="radio" id="driver" name="status" />
          <label htmlFor="driver">Haydovchi</label>
          <input onChange={() => setIsStatus(false)} type="radio" id="consumer" name="status" />
          <label htmlFor="consumer">Yo'lovchi</label>
        </RadioContainer>
        <Button onClick={register} width={250} height={40}>
          Ro'yxatdan o'tish
        </Button>
      </LoginBox>
    </Container>
  );
};

export default SignUp;
