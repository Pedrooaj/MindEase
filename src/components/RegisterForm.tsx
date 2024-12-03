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
    -webkit-box-shadow: 11px 7px 30px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 11px 7px 30px 1px rgba(0,0,0,0.75);
    box-shadow: 11px 7px 30px 1px rgba(0,0,0,0.75);
    background-color: #BFC5D2;
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
                    <Form.Control type="number" placeholder="CPF" />
                </FloatingLabel>
                <FloatingLabel
                    style={{ width: '50%' }}
                    controlId="floatingInput"
                    label="CRP"
                    className="mb-3"
                    id='Input'
                >
                    <Form.Control type="number" placeholder="CRM" />
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


            <a onClick={() => navigate("/")} className='mb-1' style={{ marginRight: 'auto' }} >Já tem conta?</a>
            <Button onClick={() => navigate("senha")} size='lg' variant="primary">Seguir</Button>
        </FormContainer>
    );
}

export default RegisterForm;