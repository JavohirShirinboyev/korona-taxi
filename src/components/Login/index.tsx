import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Container, LoginBox } from "./styled";
import Input from "../Generic/Input";
import Button from "../Generic/Button";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.log(email, password);
  };

  return (
    <Container>
      <LoginBox>
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
        <Button onClick={signIn} width={250} height={40}>
          Kirish
        </Button>
        <NavLink to="/signup">
          Ro'yxatdan o'tish
        </NavLink>
      </LoginBox>
    </Container>
  );
};

export default Login;
