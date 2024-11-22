import styled from "styled-components";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { LuBrain } from "react-icons/lu";
import { toast } from "react-toastify";

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

const PasswordForm = () => {
    const navigate = useNavigate();

    const registrar = () => {
        toast.success("Registrado com sucesso", { position: "top-center", autoClose: 3000 });
        navigate("/");
    }

    return (
        <FormContainer>
            <h1>MindEase <LuBrain size={"1.5em"} /></h1>
            <FloatingLabel id='Input' controlId="floatingPassword" className='mb-3' label="Senha*">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel id='Input' controlId="floatingPassword" className='mb-3' label="Confirmar Senha*">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button onClick={() => registrar()} size='lg' variant="primary">Confirmar</Button>
        </FormContainer>
    )
}

export default PasswordForm;