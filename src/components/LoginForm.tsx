import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { LuBrain } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 45%;
    padding: 30px;
    border-radius: 20px;
    background-color: aqua;
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

  return (
    <FormContainer>
        <h1>MindEase <LuBrain size={"1.5em"} /></h1>
      <FloatingLabel
        controlId="floatingInput"
        label="CRM/CPF"
        className="mb-3"
        id='Input'
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <a onClick={() => navigate("/")} style={{ marginLeft: 'auto' }} className='mb-1' >Esqueceu a senha?</a>
      <FloatingLabel id='Input' controlId="floatingPassword" className='mb-2' label="Senha">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <a onClick={() => navigate("/registro")} style={{ marginRight: 'auto' }} className='mb-1'>Não tem conta?</a>
      <Button size='lg' variant="primary">Entrar</Button>
    </FormContainer>
  );
}

export default LoginForm;