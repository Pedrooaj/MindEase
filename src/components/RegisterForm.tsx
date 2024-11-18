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

const RegisterForm = () => {
    const navigate = useNavigate();

    const registrar = () => {
        console.log("Registrado");
        navigate("/");
    }

    return (
        <FormContainer>
            <h1>MindEase <LuBrain size={"1.5em"} /></h1>
            <FloatingLabel id='Input' controlId="floatingNome" className='mb-3' label="Nome">
                <Form.Control type="text" placeholder="Nome" />
            </FloatingLabel>
            <div style={{ width: "100%", display: "flex", gap: '5px' }}>
                <FloatingLabel
                    style={{ width: '50%' }}
                    controlId="floatingInput"
                    label="CPF*"
                    className="mb-3"
                    id='Input'
                >
                    <Form.Control type="text" placeholder="CPF" />
                </FloatingLabel>
                <FloatingLabel
                    style={{ width: '50%' }}
                    controlId="floatingInput"
                    label="CRM"
                    className="mb-3"
                    id='Input'
                >
                    <Form.Control type="text" placeholder="CRM" />
                </FloatingLabel>
            </div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email*"
                className="mb-3"
                id='Input'
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel id='Input' controlId="floatingPassword" className='mb-3' label="Senha*">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel id='Input' controlId="floatingPassword" className='mb-2' label="Confirmar Senha*">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <a onClick={() => navigate("/")} className='mb-1' style={{ marginRight: 'auto' }} >Já tem conta?</a>
            <Button onClick={() => registrar()} size='lg' variant="primary">Registrar-se</Button>
        </FormContainer>
    );
}

export default RegisterForm;