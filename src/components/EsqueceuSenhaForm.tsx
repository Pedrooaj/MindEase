import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
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
const EsqueceuSenha = () => {

    const navigate = useNavigate();

    const recuperarSenha = () => {
        toast.success("Email enviado", { position: "bottom-left", autoClose: 3000 });
        navigate("/");
    }

    return (
        <FormContainer>
            <h1>MindEase <LuBrain size={"1.5em"} /></h1>
            <FloatingLabel id='Input' controlId="floatingPassword" className='mb-3' label="CPF*">
                <Form.Control type="text" placeholder="Digitel Seu Email" />
            </FloatingLabel>
            <FloatingLabel id='Input' controlId="floatingPassword" className='mb-3' label="Email*">
                <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
            <Button onClick={() => recuperarSenha()} size='lg' variant="primary">Recuperar senha</Button>
        </FormContainer>
    );
}

export default EsqueceuSenha;