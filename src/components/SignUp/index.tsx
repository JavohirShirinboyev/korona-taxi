import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/config";
import { Container, LoginBox } from "./styled";
import Input from "../Generic/Input";
import Button from "../Generic/Button";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    
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
        <Button onClick={register} width={250} height={40}>
          Ro'yxatdan o'tish
        </Button>
      </LoginBox>
    </Container>
  );
};

export default SignUp;
