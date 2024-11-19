import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { LuBrain } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import Alerta from './Alert';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: auto;
    padding: 30px;
    border-radius: 20px;
  
    -webkit-box-shadow: 11px 7px 30px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 11px 7px 30px 1px rgba(0,0,0,0.75);
    box-shadow: 11px 7px 30px 1px rgba(0,0,0,0.75);
    & #Input{
        width: 100%;
    }
    & a{
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
    }

    & a:hover{
        scale: 1.05;
    }

    & h1 {
      font-size: 2em;
    }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [erro, setErro] = useState(false);
  const [user, setUser] = useState({
    cpf: "",
    senha: ""
  });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!user.cpf || !user.senha){
      setErro(true);
    }

    toast("Seja bem Vindo!", { position: "bottom-left" });
    
  }

  return (
    <FormContainer onSubmit={submitForm} >
        <h1>MindEase <LuBrain size={"1.5em"} /></h1>
       { erro ? <Alerta variant='danger'>❌ Preencha todos os campos ❌</Alerta> : null }
      <FloatingLabel
        controlId="floatingInput"
        label="CRM/CPF"
        className="mb-3"
        id='Input'
        
      >
        <Form.Control type="text" placeholder="Nome" onChange={(e) => setUser({...user, cpf: e.target.value})} />
      </FloatingLabel>
      <a onClick={() => navigate("/")} style={{ marginLeft: 'auto' }} className='mb-1' >Esqueceu a senha?</a>
      <FloatingLabel id='Input' controlId="floatingPassword" className='mb-2' label="Senha">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setUser({...user, senha: e.target.value})} />
      </FloatingLabel>
      <a onClick={() => navigate("/registro")} style={{ marginRight: 'auto' }} className='mb-1'>Não tem conta?</a>
      <Button size='lg' type='submit' variant="primary">Entrar</Button>
    </FormContainer>
  );
}

export default LoginForm;