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
    height: auto;
    padding: 30px;
    border-radius: 20px;
    background-color: aqua;
    & #Input{
        width: 100%;
    }


    & h1 {
      font-size: 2em;
    }
`;

const RegisterForm = () => {
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
      <FloatingLabel id='Input' controlId="floatingPassword" className='mb-2' label="Senha">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button onClick={() => navigate("/")} size='lg' variant="primary">Registrar-se</Button>
    </FormContainer>
  );
}

export default RegisterForm;